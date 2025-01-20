.. _bpy.types.CollisionSensor:

****************
Collision Sensor
****************

.. seealso::
   See the Python reference of this logic brick in :class:`KX_CollisionSensor`.

A *Collision Sensor* works like a "touch sensor" but can also filter by property or material.
Only objects with the property/material with that name will generate a positive pulse upon collision.
Leave blank for collision detection with any object.

.. note:: Soft Bodies

   The *Collision* sensor cannot detect collisions with soft bodies.
   This is a limitation in Bullet, the physics library used by the Game Engine.

.. figure:: /images/logic-sensors-types-collision-node.jpg

   Collision sensor.


Properties
==========

See :ref:`Sensor Common Options <game-engine-logic-sensors-common-options>` for common options.

Pulse button
   Makes it sensible to other collisions even if it is still in touch
   with the object that triggered the last positive pulse.
M/P button
   Toggles between material and property filtering.


Example
=======
