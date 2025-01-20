.. _bpy.types.PropertyActuator:

.. _actuator-property:

*****************
Property Actuator
*****************

.. seealso::
   See the Python reference of this logic brick in :class:`SCA_PropertyActuator`.

The *Property Actuator* changes the value of a given property (like assigning, adding, or copying)
once the actuator itself is activated.

.. figure:: /images/logic-actuators-types-property-node.jpg
   :width: 271px

   Property Actuator.


Properties
==========

Mode
   Assign
      The *Property* target property will become equal to the set *Value* once the actuator is activated.
   Add
      Adds *Value* to the value of the property *Property* once the actuator is activated
      (enter a negative value to decrease).
      For *Bool*, a value other than 0 (also negative) is counted as True.
   Copy
      Copies a property from another *Object* to a property of the actuator owner once the actuator is activated.
   Toggle
      Switches 0 to 1 and any other number than 0 to 0 once the actuator is activated. Useful for on/off switches.
   Level
      TODO.

Property
   The target property that this actuator will change.
Value
   The value to be used to change the property.


Example
=======

You have a character, it has a property named "hp" (hit/health points)
to determine when he has taken enough damage to die. ``hp`` is an int with the start value of 100.

You set up two *Collision* sensors, one for enemy bullets, and one for picking up more health.
The first one is connected (through an *AND* controller) to an *Add Property* actuator with
the property ``hp`` and the value -10. Every time the player is hit by an enemy bullet he loses 10 HP.
The other sensor is connected (through an *AND* controller) to an other *Add Property* actuator,
this one with the value 50. So every time the player collides with a health item the HP increases by 50.
Next you set up a *Property* sensor for an interval, greater than 100.
This is connected (through an *AND* controller) to an *Assign Property* actuator which is set to 100.
So if the players HP increases over 100 it is set to 100.
