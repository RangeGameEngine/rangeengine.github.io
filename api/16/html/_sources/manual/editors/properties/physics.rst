
********
Physics
********

.. figure:: /images/editors-properties-physics-physics.png

   Physics tab.

Physics
=======
   
Options in Physics panel change according to its selected Physics Type. See below:

.. toctree::
   :maxdepth: 1
   :caption: Physics Types
   
   physics_no_collision
   physics_static
   physics_dynamic
   physics_rigid_body
   physics_soft_body
   physics_occluder
   physics_sensor
   physics_navigation_mesh
   physics_character
   physics_vehicle

.. _game-engine-physics-object-collision-bounds:

Collision Bounds
================

.. figure:: /images/editors-properties-physics-collision_bounds.png

   Collision Bounds panel in Physics tab.

The first thing you must understand is the idea of the 3D Bounding Box.
If you run through all the vertices of a mesh and record the lowest and highest x values,
you have found the *x min/max* the complete boundary for all x values within the mesh.
Do this again for y and z, then make a rectangular prism out of these values, and you have a *Bounding Box*.
This box could be oriented relative globally to the world or locally to the object's rotation.

.. figure:: /images/editors-properties-physics-rigid_body-bounding_box.png
   :width: 500px

   Demonstration of a Local Bounding Box (left) and a Global Bounding Box (right).

The *x extent*, then, is half of the distance between the x min/max.

Throughout all of this you must be cognizant of the Object Origin. For the Game engine,
the default :kbd:`Shift-Ctrl-Alt-C`, :kbd:`3` or :menuselection:`Set Origin --> Origin to Geometry`
is unlikely to get the desired placement of the Collision Bounds that you want.
Instead, you should generally set the origin by looking at the Tool Shelf after you do the *Set Origin*,
and changing the *Center* from *Median Center* to *Bounds Center*.
RanGE will remember this change for future :kbd:`Shift-Ctrl-Alt-C` executions.

All Collision Bounds are centered on this origin. All boxes are oriented locally, so object rotation matters.

.. figure:: /images/editors-properties-physics-rigid_body-origin_to_box_bounds.png

   Setting the origin to Bounds Center instead of Median Center.

A final introductory comment: When you set the Collision Bounds on an object,
RanGE will attempt to display a visualization of the bounds in the form of a dotted outline.
Currently, there is a bug: *The 3D View*
does not display this bounds preview where it actually will be during the game.
To see it, go to :menuselection:`Game --> Show Physics Visualization`
and look for the white (or green, if sleeping) geometry.

Now we can explain the various options for the *Collision Bounds* settings:

Default
   For Dynamic and Static objects, it is a Triangle Mesh (see below).
   For everything else, it is a Sphere (see below).
Capsule
   Which is a cylinder with hemispherical caps, like a pill.
   Radius of the hemispheres is the greater of the X or Y extent.
   Height is the Z bounds.
Box
   The X, Y, Z bounding box, as defined above.
Sphere
   Radius is defined by the object's scale (visible in the N properties panel) times the physics radius
   (can be found in :menuselection:`Physics --> Attributes --> Radius`).
   Note: This is the only bounds that respects the Radius option.
Cylinder
   Radius is the greater of the x or y extent.
   Height is the z bounds.
Cone
   Base radius is the greater of the x or y extent.
   Height is the z bounds.
Convex Hull
   Forms a shrink-wrapped, simplified geometry around the object.

   .. figure:: /images/editors-properties-physics-rigid_body-convex_hull.png
      :width: 500px

      A convex hull sketch.

Triangle mesh
   Most expensive, but most precise. Collision will happen with all of triangulated polygons,
   instead of using a virtual mesh to approximate that collision.
By Hand
   This is not an option in the Physics tab's Collision Bounds settings, but a different approach, entirely.
   You create a second mesh, which is invisible, to be the physics representation.
   This becomes the parent for your display object. Then,
   your display object is set to ghost so it does not fight with the parent object.
   This method allows you to strike a balance between the accuracy of *Triangle Mesh*
   with the efficiency of some of the others. See the demo of this in the dune buggy to the right.

   .. figure:: /images/editors-properties-physics-rigid_body-manual_hull.png

      Another way to create Collision Bounds -- By hand.


Options
-------

There are only two options in the Collision Bounds subpanel.

Margin
   "Add extra margin around object for collision detection, small amount required for stability."
   If you find your objects are getting stuck in places they should not, try increasing this to, say, 0.06.

   Sometimes 0.06 is the default (such as on the Default Cube), but sometimes it is not.
   You have to keep an eye on the setting, or else learn the symptoms so you can respond when it gives you trouble.
   If you are lazy/paranoid/unsure/diligent/bored,
   you can always run this on the Python Console to bump all 0.0 margins to 0.06: for
   ``obj`` in ``bpy.data.objects``: ``obj.game.collision_margin = obj.game.collision_margin`` or 0.06
Compound
   "Add children to form compound collision object." Basically,
   if you have a child object and do not have this enabled,
   the child's collisions will not have an effect on that object "family"
   (though it will still push other objects around). If you do have it checked,
   the parent's physics will respond to the child's collision (thus updating the whole family).


Create Obstacle
===============

Todo