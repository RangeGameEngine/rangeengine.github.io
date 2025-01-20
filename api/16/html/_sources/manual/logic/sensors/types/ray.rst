.. _bpy.types.RaySensor:

**********
Ray Sensor
**********

.. seealso::
   See the Python reference of this logic brick in :class:`KX_RaySensor`.

The *Ray Sensor* shoots a ray in the direction of an axis and sends a positive pulse once 
it hits something. It can be filtered to only detect objects with a given material or property.

.. figure:: /images/logic-sensors-types-ray-node.png

   Ray sensor.


Properties
==========

See :ref:`Sensor Common Options <game-engine-logic-sensors-common-options>` for common options.

Property
   This field can be used to limit the sensor to look for only those objects with this property.

.. note::

   #. Unless the Property field is set, the Ray sensor can detect objects "through" other objects (walls, etc.).
   #. Objects must have "Actor" enabled to be detected.

Axis
   This menu determines the direction of the ray.
   The ± signs is whether it is on the axis direction (+), or the opposite (-).
Range
   Determines the length of the ray (in Blender units).
X-Ray Mode button
   Makes it x-ray, so that it sees through objects that do not
   have the property or material specified in the filter field.


Example
=======
