.. _bpy.types.NearSensor:

***********
Near Sensor
***********

.. seealso::
   See the Python reference of this logic brick in :class:`KX_NearSensor`.

A *Near Sensor* detects objects that move to within a specific distance of themselves.
It can filter objects with properties,
like the :doc:`Collision sensor </manual/logic/sensors/types/collision>`.

.. note::

   #. The Near sensor can detect objects "through" other objects (walls, etc.).
   #. Objects must have "Actor" enabled to be detected.

.. note::

   The *Near* sensor cannot detect soft bodies.
   This is a limitation in Bullet, the physics library used by the Game Engine.

.. figure:: /images/logic-sensors-types-near-node.png

   Near sensor.


Properties
==========

See :ref:`Sensor Common Options <game-engine-logic-sensors-common-options>` for common options.

Property
   This field can be used to limit the sensor to look for only those objects with this property.
Distance
   The number of Blender units it will detect objects within.
Reset
   The distance the object needs to be to reset the sensor (send a ``FALSE`` pulse).


Example
=======
