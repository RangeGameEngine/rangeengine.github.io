
***************
Dynamic Physics
***************

*Dynamic* objects give or receive collisions,
but when they do so they themselves do not rotate in response.
So, a Dynamic ball will hit a ramp and slide down, while a rigid body ball would begin rotating.

If you do not need the rotational response the Dynamic type can save the extra computation.

Note that these objects can still be rotated with :doc:`Logic Bricks </manual/logic/index>` or Python code.
Their physics meshes will update when you do these rotations -- so collisions will be based on the new orientations.

For more documentation, see the general :doc:`physics page <./physics>`.


Options
=======

See :doc:`./physics_rigid_body`.
