.. _bpy.types.MouseActuator:

**************
Mouse Actuator
**************

.. seealso::
   See the Python reference of this logic brick in :class:`KX_MouseActuator`.

The *Mouse Actuator* allows two modes of operation,
to show/hide the mouse cursor or to control object rotation with the mouse.
The mouse rotation is flexible enough to allow any type of mouse look
as well as banking for flight controls.


Properties
==========

Mode
   Determines the mouse mode.

   Visibility
      Allows to show/hide the mouse cursor.
   Look
      Controls the object rotation according to X and/or Y mouse movement.
      Moreover, the object rotation can be constrained using thresholds and capping angles.


Visibility
----------

Mouse actuator for Visibility.

.. figure:: /images/logic-actuators-types-mouse-visibility.png

Visibility
   Toggles the visibility of the mouse cursor.


Look
----

Servo control is a powerful way to achieve motion in way which mimics the movement of objects in the physical world.
It consists in a servo controller that adjusts the force on the object in order to achieve a given speed.

.. note::

   To make Mouse Look work in a smoother way, it is necessary that the width and
   height screen resolutions, in the render window, are set with even numbers (i.e. 1920x1080).

.. figure:: /images/logic-actuators-types-mouse-look.png

   Mouse Actuator: Look.

Use X axis, Y axis
   Specifies the object which the actuator owner uses as a reference for movement,
   for moving platforms for example. If empty it will use world reference.
Sensitivity
   The target linear velocity, in each of the three axes, which the object will try and achieve.
Threshold
   Coordinates specified are Global (gray) or Local (white).
Min
   Sets maximum and minimum limits for the force applied to the object.
   If disabled (i.e. X, Y or Z buttons are gray) the force applied is unlimited.
Max
   Set the Proportional Coefficient. This controls the reaction
   to differences between the actual and target linear velocity.
Object axis X, Y, Z
   Set the Integral Coefficient. This controls the reaction to the sum of errors so far in this move.
Local
   Apply locally the rotation around the object axis selected.
Reset
   Reset the cursor's X/Y position to the center of the screen space after calculating.


Example
=======
