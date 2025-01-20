.. _bpy.types.MessageSensor:

**************
Message Sensor
**************

.. seealso::
   See the Python reference of this logic brick in :class:`KX_NetworkMessageSensor`.

The *Message Sensor* can be used to detect either text messages or property values.
The sensor sends a positive pulse once an appropriate message is sent from anywhere in the engine.
It can be set up to only send a pulse upon a message with a specific subject.

.. note::

   See :doc:`Message Actuator </manual/logic/actuators/types/message>` for how to send messages.

.. figure:: /images/logic-sensors-types-message-node.jpg

   Message Sensor.


Properties
==========

See :ref:`Sensor Common Options <game-engine-logic-sensors-common-options>` for common options.

Subject
   Specifies the message that must be received to trigger the sensor (this can be left blank).


Example
=======
