
**************
Sensor Physics
**************

The object detects static and dynamic objects but not other collisions sensors objects.
The Sensor is similar to the physics objects that underlie the Near and Radar sensors.
Like the Near and Radar object it is:

- Static and ghost.
- Invisible by default.
- Always active to ensure correct collision detection.
- Capable of detecting both static and dynamic objects.
- Ignoring collision with their parent.
- Capable of broadphase filtering based on:

  - Actor option: the colliding object must have the Actor flag set to be detected.
  - Property/material: as specified in the collision sensors attached to it.

Broadphase filtering is important for performance reason:
the collision points will be computed only for the objects that pass the broadphase filter.

- Automatically removed from the simulation when no collision sensor is active on it.

Unlike the Near and Radar object it can:

- Take any shape, including triangle mesh.
- Be made visible for debugging (just use the Visible actuator).
- Have multiple collision sensors using it.

Other than that, the sensor objects are ordinary objects.
You can move them freely or parent them. When parented to a dynamic object,
they can provide advanced collision control to this object.

The type of collision capability depends on the shape:

- Box, sphere, cylinder, cone, convex hull provide volume detection.
- Triangle mesh provides surface detection but you can give some volume to
  the surface by increasing the margin in the Advanced Settings panel.
  The margin applies on both sides of the surface.


.. rubric:: Performance tip

- Sensor objects perform better than Near and Radar:
  they do less synchronizations because of the Scenegraph optimizations and they can
  have multiple collision sensors on them (with different property filtering for example).
- Always prefer simple shape (box, sphere) to complex shape whenever possible.
- Always use broadphase filtering (avoid collision sensor with empty property/material).
- Use collision sensor only when you need them. When no collision sensor is active on the sensor object,
  it is removed from the simulation and consume no CPU.


.. rubric:: Known limitations

- When running Blender in debug mode, you will see one warning line of the console:

   .. code-block:: sh

      warning btCollisionDispatcher::needsCollision: static-static collision!
      In release mode this message is not printed.

- Collision margin has no effect on sphere, cone and cylinder shape.


Settings
========

Invisible
   See :doc:`Here <./physics_static>`.


Collision Bounds
================

See :ref:`Here <game-engine-physics-object-collision-bounds>`.
