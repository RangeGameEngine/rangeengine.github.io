
**********************
Occlude Object Physics
**********************
**(Outdated)**

If an Occlude type object is between the camera and another object,
that other object will not be rasterized (calculated for rendering).
It is culled because it is occluded.

There is a demo blend-file to exemplify some concepts:
`BGE-Physics-Objects-Occluder.blend <https://wiki.blender.org/index.php/Media:BGE-Physics-Objects-Occluder.blend>`__

- A messed-up, subdivided Cube named "Cube".
- Another one behind a "Physics Type: Occlude" plane, named "Cube.BG".
- Another one outside the view Frustum, named "Cube.OffCamera".

Now observe what happens to the profiling stats for each of the following (in order):

#. Hit :kbd:`P` as the scene is. It hums along at a fairly slow rate. On my system the Rasterizer step takes 130ms.
   The frame rate will finally jump up once the "Cube" object has completely moved out of the view frustum.
   It is as if the Occluder does not do anything while the Cube is behind it.
#. Delete the "Cube.OffCamera" object above,
   and notice that there is no improvement in speed.
   This is the view frustum culling working for you -- it does not matter if that object exists or not.
#. Hit :kbd:`Z` to view wireframe. Notice that in the 3D View you can see "Cube.BG",
   but once you press :kbd:`P`, it is not there.
#. Make the "Occluder" object take up the whole camera's view with :kbd:`S X 5`.
   You will see a huge leap in frame rate,
   since almost nothing is being Rasterized. On my system the Rasterizer step drops to 5ms.
#. Try a run with :menuselection:`World properties --> Physics --> Occlusion Culling` disabled.
   It will be slow again.
#. Reenable :menuselection:`World properties --> Physics --> Occlusion Culling`
   and run it one more time to prove to yourself that your speed is back.
#. Change the Occluder to "Physics Type: Static". Notice that it is back to the original slowness.
#. Change it back to "Physics Type: Occlude".
#. Now make the "Occluder" invisible. The frame rate is back down to its original, slow rate.

.. ??? - I thought this was supposed to work when invisible.

.. Incorporate some of the details from:
   Dev:Ref/Release_Notes/2.49/Game_Engine#BGE_Scenegraph_improvement|2.49 Release Notes


Details
=======

As far as Physics is concerned, this type is equivalent to Rigid Object "No collision".
The reason why the Occluder mode is mutually exclusive with other physics mode is
to emphasize the fact that occluders should be specifically designed for
that purpose and not every mesh should be an occluder.
However, you can enable the Occlusion capability on physics objects using Python and Logic bricks.
See (Link- TODO).

When an occluder object enters the view frustum,
the BGE builds a Z-depth buffer from the faces of that object.
Whether the faces are one-side or two-side is important:
only the front faces and two-side faces are used to build the Z-depth buffer.
If multiple occluders are in the view frustum,
the BGE combines them and keeps the most foreground faces.

The resolution of the Z-depth buffer is controllable in the World settings with
the "Occlusion Culling Resolution" button:

By default the resolution is 128 pixels for the largest dimension of the viewport
while the resolution of the other dimension is set proportionally.
Although 128 is a very low resolution, it is sufficient for the purpose of culling.
The resolution can be increased to maximum 1024 but at great CPU expense.

The BGE traverses the DBVT (Dynamic Bounding Volume Tree)
and for each node checks if it is entirely hidden by the occluders and if so, culls the node
(and all the objects it contains).

To further optimize the feature, the BGE builds and uses the Z-depth buffer only
when at least one occluder is in the view frustum.
Until then, there is no performance decrease compared to regular view frustum culling.


Recommendations
===============

Occlusion culling is most useful when the occluders are large objects (buildings, mountains...)
that hide many complex objects in an unpredictable way. However,
do not be too concerned about performance: even if you use it inappropriately,
the performance decrease will be limited due to the structure of the algorithm.

There are situations where occlusion culling will not bring any benefit:

- If the occluders are small and do not hide many objects.

  In that case, occlusion culling is just dragging your CPU down.
- If the occluders are large but hides simple objects.

  In that case, you are better off sending the objects to the GPU.
- If the occluders are large and hides many complex objects but in a very predictable way.

  Example: a house full of complex objects. Although occlusion culling will perform well in this case,
  you will get better performance by implementing a specific logic that hides/unhides the objects;
  for instance making the objects visible only when the camera enters the house.
- Occluders can be visible graphic objects
  but beware that too many faces will make the Z-depth buffer creation slow.

  For example, a terrain is not a good candidate for occlusion: too many faces and too many overlap.
  Occluder can be invisible objects placed inside more complex objects
  (e.g. "in the walls" of a building with complex architecture).
  Occluders can have "holes" through which you will see objects.
