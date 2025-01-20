.. _bpy.types.ActionActuator:

.. _actuator-action:

***************
Action Actuator
***************

.. seealso::
   See the Python reference of this logic brick in :class:`BL_ActionActuator`.

The *Action Actuator* controls animation actions, and sets the playback method.
It is only visible when an armature is selected, because the actions are stored in the armature.

.. figure:: /images/logic-actuators-types-action-node.png

   Action Actuator.


Properties
==========

Action Playback Type
   Play
      Play F-Curve once from start to end when a ``TRUE`` pulse is received.
   Ping Pong
      Play F-Curve once from start to end when a ``TRUE`` pulse is received.
      When the end is reached play F-Curve once from end to start when a ``TRUE`` pulse is received.
   Flipper
      Play F-Curve once from start to end when a ``TRUE`` pulse is received.
      (Plays backwards when a ``FALSE`` pulse is received).
   Loop End
      Play F-Curve continuously from end to start when a ``TRUE`` pulse is received.
   Loop Start
      Play F-Curve continuously from start to end when a ``TRUE`` pulse is received.
   Property
      Uses a property to define what frame is displayed.

Action
   Select the action to use.
Continue
   Restore last frame when switching on/off, otherwise play from the start each time.
Start Frame
   Set the start frame of the action.
End Frame
   Set the end frame of the action.
Child Button
   Update action on all children objects as well.
Blending
   Number of frames of motion blending.
Priority
   Execution priority -- lower numbers will override actions with higher numbers.
   With 2 or more actions at once, the overriding channels must be lower in the stack.
Frame Property
   Assign the action's current frame number to this property.
Property
   Use this property to define the Action position. Only for Property playback type.
Layer
   The animation layer to play the action on.
Layer Weight
   How much of the previous layer to blend into this one.


Example
=======
