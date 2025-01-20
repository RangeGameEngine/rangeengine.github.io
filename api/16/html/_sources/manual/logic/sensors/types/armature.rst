.. _bpy.types.ArmatureSensor:

***************
Armature Sensor
***************

.. seealso::
   See the Python reference of this logic brick in :class:`KX_ArmatureSensor`.

The *Armature Sensor* is used to detect changes in values of an IK solver.

.. figure:: /images/logic-sensors-types-armature-node.png

   Armature Sensor.

.. note::

   The *Armature Sensor* only is available for armature objects.


Properties
==========

Bone Name
   The bone to check for changes in value.

Constraint Name
   The bone constraint to check for changes in value.

Test
   How the sensor checks for changes in the bone.

   State Changed
      Any changes will invoke the sensor.
   Lin error below/above
      TODO.
   Rot error below/above
      TODO.

   Value
      Some tests will take a value, this value is used in the comparison when detecting changes.


Example
=======
