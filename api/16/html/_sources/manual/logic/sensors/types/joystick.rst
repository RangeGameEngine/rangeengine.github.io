.. _bpy.types.JoystickSensor:

***************
Joystick Sensor
***************

.. seealso::
   See the Python reference of this logic brick in :class:`SCA_JoystickSensor`.

The *Joystick Sensor* triggers whenever the joystick moves.
It also detects events on a range of ancillary controls on the joystick device (hat, buttons, etc.).
More than one joystick may be used (see "Index").
The exact layout of the joystick controls will depend on the make and model of joystick used.

.. figure:: /images/logic-sensors-types-joystick-button.jpg

   Joystick sensor.


Properties
==========

See :ref:`Sensor Common Options <game-engine-logic-sensors-common-options>` for common options.

Event Type
   A menu to select which joystick event to use, each is described later.
Index
   Specifies which joystick to use.
All Events
   Sensor triggers for all events on this joystick's current type.


Single Axis
-----------

Detect movement in a single joystick Axis.

.. figure:: /images/logic-sensors-types-joystick-single_axis.png

   Joystick Single Axis.

Axis Number
   Axis to detect a change.

   - 1 = Horizontal axis (left/right)
   - 2 = Vertical axis (forward/back)
   - 3 = Paddle axis up/down
   - 4 = Joystick axis twist left/right
Axis Threshold
   Threshold at which joystick fires.


Hat
---

Detects movement of a specific hat control on the joystick.

.. figure:: /images/logic-sensors-types-joystick-hat.png

   Joystick Hat.

Hat number
   Specifies which hat to use (max. 2).
Hat Direction
   Specifies the direction to use: up, down, left, right, up/right, up/left, down/right, down/left.


Axis
----

.. figure:: /images/logic-sensors-types-joystick-axis.jpg

   Joystick Axis.

Axis Number
   Specifies the axis (1 or 2).
Axis Threshold
   Threshold at which joystick fires.
Axis Direction
   Specifies the direction to use:

   - (Axis Number = 1) Joystick Left, Right, Up, Down
   - (Axis Number = 2) Paddle upper (Left); paddle Lower (Right);
   - Joystick twist left (Up) Joystick twist right (Down)


Button
------

.. figure:: /images/logic-sensors-types-joystick-button.jpg

   Joystick Button.

Specifies the *button number* to use.


Example
=======
