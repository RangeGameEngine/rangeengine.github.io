.. _bpy.types.StateActuator:

**************
State Actuator
**************

.. seealso::
   See the Python reference of this logic brick in :class:`KX_StateActuator`.

The *State Actuator* allows the user to create complex logic,
while retaining a clear user interface. It does this by having different states,
and performing operations upon them.

.. note::

   With the state actuator, you can create tiers of logic,
   without the need for hundreds of properties. Use it well, and you benefit greatly,
   but often problems may be circumvented by Python.

.. figure:: /images/logic-actuators-types-state-node.png
   :width: 271px

   State actuator.


Properties
==========

Operation
   Change State
      Change from the current state to the state specified.
   Remove State
      Removes the specified states from the active states (deactivates them).
   Add State
      Adds the specified states to the active states (activates them).
   Set State
      Moves from the current state to the state specified, deactivating other added states.


Example
=======
