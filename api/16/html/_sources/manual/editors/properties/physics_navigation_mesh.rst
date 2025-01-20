
***********************
Navigation Mesh Physics
***********************

Pathfinding in Blender is based on the concept of
`navigation meshes <http://en.wikipedia.org/wiki/Navigation_mesh>`__.
With this you can create navigation mesh for your level geometry directly in Blender and
use it in Blender Game Engine (BGE) to get your actors to find path to the target and move along it.
It is useful for creating an artificial intelligence.
Besides path following, there are also a few other steering behaviors which can be assigned to the actor:
*seek* and *flee*.

Pathfinding with a navigation mesh is most effective for big static obstacles.
To enable actors to avoid small dynamic objects during their movement local obstacle avoidance can be used.
If the obstacle simulation is enabled the actor will try to choose direction which is free of collision
with obstacles on each frame during execution one of the steering behaviors.


Usage
=====

.. This text should be improved.

To setup a navigation mesh access: *Physics* buttons and set the *Physics Type* to *Navigation Mesh*.

Now the following tools will be accessible.

NavMesh Copy Face Index
   Copies the navigation polygon index from the active face to selected faces.
NavMesh New Face Index
   Adds a new navigation polygon index to selected faces.

NavMesh Reset Index Values
   Assigns a new index to every faces.
NavMesh Clear Data
   Removes the navigation data from the mesh.
