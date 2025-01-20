
*****************
Soft Body Physics
*****************

The most advanced type of object in the Game Engine.
Also, it is the most finicky. If you are used to the fun experimentation
that comes from playing around with the non-BGE soft body simulations (such as Cloth),
you will probably find a frustrating lack of options and exciting results.
Do not despair, we are here to help you get some reasonable settings.

Your setup will involve making sure you have sufficient geometry in the soft body's mesh to
support the deformation, as well as tweaking the options.


Options
=======

Actor
   Enables detection by Near and Radar Sensors.
Ghost
   Disables collisions completely, similar to No Collision.
Invisible
   Does not display, the same as setting the object to unrendered
   (such as unchecking the camera icon in the Outliner).
Mass
   Affects the reaction due to collision between objects --
   more massive objects have more inertia. Will also affect material force fields.
   Will also change behaviors if you are using the suspension and steering portions of Bullet physics.
Shape Match
   Upon starting the Game Engine this will record the starting shape of the mesh as the "lowest energy" state.
   This means that the edges will have tension whenever they are flexed to some other form.
   This is set to on by default,
   and in this configuration turns the object into more of a thin sheet of metal rather than a cloth.
Threshold
   `Linearly scales the pose match
   <http://www.continuousphysics.com/Bullet/BulletFull/btSoftBody_8cpp_source.html#l01566>`__.

   - A threshold of 1.0 makes it behave like *Shape Match* on with a *Linear Stiffness* of 1.0.
   - A threshold of 0.0 makes it behave like *Shape Match* off with a *Linear Stiffness* of 0.0.
Welding
   TODO.
Position Iteration
   Increase the accuracy at a linearly-increasing expense of time.
   The effect is visible especially with soft bodies that fall on sharp corners,
   though this can slow down even very simple scenes.
Linear Stiffness
   Linear stiffness of the soft body links.
   This is most evident when you have *Shape Match* off, but it is also evident with it on.
Friction
   Dynamic friction coefficient.

.. TODO: Learn/demo/explain.

Margin
   Small value makes the algorithm unstable.

.. TODO: Learn/demo/explain.

Bending Constraint
   Enable Bending Constraints.

.. TODO: Learn/demo/explain.

Cluster Collision
   Affects Collision sensors as well as physics.

   Rigid to Soft Body
      Enable cluster collisions between rigid and soft bodies.
   Soft to Soft Body
      Enable cluster collisions among soft bodies.
   Iterations
      Number of cluster iterations.


Hints
=====

- A very important configurable in the case of soft body interactions is
  :doc:`World Properties <./world>`
  :menuselection:`--> Physics --> Physics Steps --> Substeps`.
- Surprisingly, the more vertices you have in your hit object, the less likely the soft body is to react with it.
  If you try letting it hit a Plane, it might stop, but a subdivided Grid might fail.

.. note::

   Soft bodies do not work with the Collision, Touch, Near, and Radar logic brick sensors.

.. warning::

   A common practice within the non-BGE Cloth simulator is to employ
   Force Fields to animate the cloth.
   These do not work in the BGE, so you will have to figure out a way to use Python
   (or perhaps plain Logic Bricks) to apply forces to the soft body objects.


Goal Weights
============

TODO. See `Python API
<https://www.blender.org/api/blender_python_api_current/bpy.ops.curve.html#bpy.ops.curve.spline_weight_set>`__.
