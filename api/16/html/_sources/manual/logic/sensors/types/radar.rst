.. _bpy.types.RadarSensor:

************
Radar Sensor
************

.. seealso::
   See the Python reference of this logic brick in :class:`KX_RadarSensor`.

The *Radar Sensor* works much like the :doc:`Near sensor </manual/logic/sensors/types/near>`,
but only within an angle from an axis, forming an invisible cone with the top in the objects'
center and base at a distance on an axis.
This sensor is useful for giving bots sight only in front of them, for example.

.. note:: Soft Bodies

   The *Radar* sensor cannot detect soft bodies.
   This is a limitation in Bullet, the physics library used by the Game Engine.

.. note::

   #. The Radar sensor can detect objects "through" other objects (walls, etc.).
   #. Objects must have "Actor" enabled to be detected.

.. figure:: /images/logic-sensors-types-radar-node.png

   Radar sensor.


Properties
==========

See :ref:`Sensor Common Options <game-engine-logic-sensors-common-options>` for common options.

Property
   This field can be used to limit the sensor to look for only those objects with this property.
Axis
   This menu determines the direction of the radar cone.
   The ± signs is whether it is on the axis direction (+), or the opposite (-).
Angle
   Determines the angle of the cone.
Distance
   Determines the length of the cone. (Blender units).


Example
=======
