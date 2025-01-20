.. _bpy.types.ArmatureActuator:

*****************
Armature Actuator
*****************

.. seealso::
   See the Python reference of this logic brick in :class:`BL_ArmatureActuator`.

The *Armature Actuator* is used to modify bone constraints.

.. figure:: /images/logic-actuators-types-armature-node.png

   Armature Actuator.

.. note::

   The *Armature Actuator* only is available for armature objects.


Properties
==========

Constraint Type
   Action to perform on the bone constraint.

   Run Armature
      Enables an armature to be allowed to move.
   Enable/Disable
      Used to disable a constraint by selecting the constraint via the Data ID.
   Set Target
      Used to change the constraint's Target by selecting the new target via 
      the Data ID.
   Set Weight
      Used to change the weight of a constraint by selecting a new weight with 
      the *Weight* field.
   Set Influence
      Used to change the Influence of a constraint by selecting a new weight 
      with the *Influence* field.

Constraint
   Several of the *Constraint Types* need you to select a constraint to use, 
   this is done via this Data ID.


Example
=======
