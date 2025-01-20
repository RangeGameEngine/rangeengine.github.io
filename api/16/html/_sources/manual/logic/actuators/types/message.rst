.. _bpy.types.MessageActuator:

****************
Message Actuator
****************

.. seealso::
   See the Python reference of this logic brick in :class:`KX_NetworkMessageActuator`.

The *Message Actuator* allows the user to send data across a scene,
and between scenes themselves, which can be received by other objects to activate them.

.. figure:: /images/logic-actuators-types-message-node.png
   :width: 271px

   Message actuator.


Properties
==========

To
   Object to broadcast to. Leave blank if broadcast to all (or sending to another scene).
Subject
   Subject of message. Useful if sending certain types of message, such as "end-game",
   to a message sensor listening for "end game" ``and`` Quit Game actuator.
Body
   Body of message sent (only read by Python).

   Text
      User-specified text in body.
   Property
      User-specified property.

.. tip::

   You can use the *Message Actuator* to send data, such as scores to other objects,
   or even across scenes! (alternatively use ``bge.logic.globalDict``).


Example
=======
