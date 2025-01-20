.. _bpy.types.MouseSensor:

************
Mouse Sensor
************

.. seealso::
   See the Python reference of this logic brick in :class:`SCA_MouseSensor`.

The *Mouse Sensor* detects mouse events.

.. figure:: /images/logic-sensors-types-mouse-node.jpg

   Mouse sensor.


Properties
==========

See :ref:`Sensor Common Options <game-engine-logic-sensors-common-options>` for common options.

The controller consist only of a list of types of mouse events.
A ``FALSE`` pulse is given when any of these conditions ends.

Mouse over any
   Gives a ``TRUE`` pulse if the mouse moves over any game object.
Mouse over
   Gives a ``TRUE`` pulse if the mouse moves over the owner object.
Movement
   Any movement with the mouse causes a stream of ``TRUE`` pulses.
Wheel Down
   Causes a stream of ``TRUE`` pulses as the scroll wheel of the mouse moves down.
Wheel Up
   Causes a stream of ``TRUE`` pulses as the scroll wheel of the mouse moves up.
Right button
   Gives a ``TRUE`` pulse.
Middle button
   Gives a ``TRUE`` pulse.
Left button
   Gives a ``TRUE`` pulse.

.. note::

   There is no logic brick for specific mouse movement and
   reactions (such as first person camera), these have to be coded in Python.
