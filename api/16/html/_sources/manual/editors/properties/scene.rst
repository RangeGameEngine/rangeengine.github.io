
*****
Scene
*****

The **Scene** tab in :doc:`Properties Editor </manual/editors/properties/index>` exposes 
options related to the current scene.

Physics
=======

.. figure:: /images/editors-properties-scene-physics.png

   Scene tab's Physics panel.

The *Physics* panel located in the *Scene* tab determine the type of physical rules 
that govern the current RanGE scene, the gravity value to be used and some other options.

Physics Engine
   Set the type of physics engine to use.

   Bullet
      The default physics engine, in active development. It handles movement and 
      collision detection. The things that collide transfer momentum to the 
      collided object.
      
   None
      No physics in use. Things are not affected by gravity and can fly about in a 
      virtual space. Objects in motion stay in that motion.
      
Physics Solver
   The physics constraints solver to use.
   
   Sequential
      Sequential physics solver, default solver.
      
   NNGC
      NNGC physics solver.
      
   MLCP Dantzig
      MLCP Dantzig physics solver.
      
   MLCP Lemke
      MLCP Lemke physics solver.
      
Gravity
   The gravitational acceleration, m.s\ :sup:`-2` (in units of meters per squared 
   second), of this world. Each object that is an actor has a mass and size slider. In 
   conjunction with the frame rate, RanGE uses this info to calculate how fast the 
   object should accelerate downward.
   
Physics Steps
   Max
      Sets the maximum number of physics steps per game frame if graphics slow down the 
      game. Higher value allows physics to keep up with real-time.
      
   Substeps
      Sets the number of simulation sub-steps per physics time step. Higher value give 
      better physics precision.
      
   FPS
      Set the nominal number of game frames per second. Physics fixed timestep = 1/fps, 
      independently of actual frame rate.
      
Time Scale
   Time scale to slow down or speed up animations and physics in game.
      
Logic Steps
   Max
      Sets the maximum number of logic frame per game frame if graphics slows down the 
      game, higher value allows better synchronization with physics.
   
Physics Deactivation
   These settings control the threshold at which physics is deactivated. These settings 
   help reducing the processing spent on Physics simulation during the game.

   Linear Threshold
      The speed limit under which a rigid body will go to sleep (stop moving) if it 
      stays below the limits for a time equal or longer than the deactivation time 
      (sleeping is disabled when deactivation time is set to 0).
      
   Angular Threshold
      Same as linear threshold, but for rotation limit (in rad/s).
      
   Time
      The amount of time in which the object must have motion below the thresholds for 
      physics to be disabled (0.0 disables physics deactivation).
   
Culling
   Occlusion Culling
      Use optimized Bullet DBVT tree for view frustum and occlusion culling (more 
      efficient, but it can waste unnecessary CPU if the scene doesn't have occluder 
      objects).
      
   Resolution
      The size of the occlusion culling buffer in pixel, use higher value for better 
      precision (slower). The optimized Bullet DBVT for view frustum and occlusion 
      culling is activated internally by default.
      
Object Activity
   Activity Culling
      Enable object activity culling in this scene. The culling options can be set 
      individually by object on **Activity Culling** panel on 
      :doc:`Object tab </manual/editors/properties/object>`.

Obstacle Simulation
===================

.. figure:: /images/editors-properties-scene-obstacle_simulation.png

   Scene tab's Obstacle Simulation panel.

Simulation used for obstacle avoidance in RanGE, based on the RVO (Reciprocal Velocity 
Obstacles) principle. The aim is to prevent one or more actors colliding with obstacles.

Type
   None
      Obstacle simulation is disabled, actors are not able to avoid obstacles.
      
   RVO (cells)
      Obstacle simulation is based on the 
      `RVO method <http://gamma.cs.unc.edu/RVO/>`__ with cell sampling.
      
   RVO (rays)
      Obstacle simulation is based on the 
      `RVO method <http://gamma.cs.unc.edu/RVO>`__ with ray sampling.

Level height
   Max difference in heights of obstacles to enable their interaction. Used to define 
   minimum margin between obstacles by height, when they are treated as those which are 
   situated one above the other i.e. they does not influence to each other.
   
Visualization
   Enable debug visualization for obstacle simulation.

Navigation Mesh
===============

.. figure:: /images/editors-properties-scene-navigation_mesh.png

   Scene tab's Navigation Mesh panel.

Rasterization
   Cell size
      Rasterized cell size.
      
   Cell height
      Rasterized cell height.
      
Agent
   Height
      Minimum height where the agent can still walk.
      
   Radius
      Radius of the agent.
      
   Max climb
      Maximum height between grid cells the agent can climb.
      
   Max slope
      Maximum walkable slope angle in degrees.
      
Region
   Min Region Size
      Minimum regions size. Smaller regions will be deleted.
      
   Merged Region Size
      Minimum regions size. Smaller regions will be merged.
      
Partitioning
   Watershed
      Classic Recast partitioning method generating the nicest tessellation.
      
   Monotone
      The fastest navmesh generation method, but may cause long thin polygons.
      
   Layers
      A reasonably fast method that produces better triangles than monotone partitioning.
      
Polygonization
   Max Edge Length
      Maximum contour edge length.
      
   Max Edge Error
      Maximum distance error from contour to cells.
      
   Vertices Per Poly
      Max number of vertices per polygon.
      
Detail Mesh
   Sample Distance
      Detail mesh sample spacing.
      
   Max Sample Error
      Detail mesh simplification max sample error.
      
Level of Detail
===============

.. figure:: /images/editors-properties-scene-level_of_detail.png

   Scene tab's Level of Detail panel.

Hysteresis
   Use LoD hysteresis settings for the current scene.
   
   Slider from 0% to 100%
      Minimum distance change required to transition to the previous level of detail.
      
Python Console
==============

.. figure:: /images/editors-properties-scene-python_console.png

   Scene tab's Python Console panel.

Enabling the panel's checkbox allows to trigger an interactive Python console when the 
game is running through the specified shortcut.

Keys
   Set the keys to be pressed in order to activate the Python console in game.

Scene
======

.. figure:: /images/editors-properties-scene-scene.png

   Scene tab's Scene panel.

Camera
   Used to select which camera is used as the active camera. You can also set the active 
   camera in the 3D View with :kbd:`Ctrl-0`.

World Sun:
   Define the world’s Sun in the current scene.

.. _scene-background-set:

Background
   Allows you to use a scene as a background, this is typically useful when you want to 
   focus on animating the foreground for example, without background elements getting 
   in the way.

   This scene can have its own animation, physics simulations, etc, but you will have to 
   select it from the *Scene* data-block menu, if you want to edit any of its contents.

   Sets can themselves have a background set (they're recursively included). So you can 
   always make additions to existing scenes by using them as a background to a newly 
   created scene where your additions are made.

   .. tip::

      This can also be used in combination with Linking to a Scene, where one blend-file 
      contains the environment, which can be reused in many places.

Camera
   Active camera, used for rendering the scene.
   
Background
   Background set scene.

Units
======

.. figure:: /images/editors-properties-scene-units.png

   Scene tab's Units panel.

Unit Presets
   Common unit scales to use.
   
Length
   None
      Uses RanGE Units.
      
   Metric, Imperial
      Standard unit of measurement for lengths.
      
Angle
   Standard unit for angular measurement.

   Degrees, Radians

   .. tip::

      When you are using *Degrees*, the radian value is also displayed in the tooltip.

Unit Scale
   Scale factor to use when converting between RanGE Units and *Metric*/*Imperial*.

   .. tip::

      Usually you will want to use the *Length* presets to change to scale factor,
      as this does not require looking up values to use for conversion.

Separate Units
   When *Metric* or *Imperial* display units as multiple values,
   for example, "2.285m" will become "2m 28.5cm".

.. Normally we would avoid documenting long lists of values
   however, this is not displayed anywhere else.

.. list-table:: Imperial Units
   :header-rows: 1
   :stub-columns: 1

   * - Full Name
     - Short Name(s)
     - Scale of a Meter
   * - thou
     - ``mil``
     - 0.0000254
   * - inch
     - ``"``, ``in``
     - 0.0254
   * - foot, feet
     - ``'``, ``ft``
     - 0.3048
   * - yard
     - ``yd``
     - 0.9144
   * - chain
     - ``ch``
     - 20.1168
   * - furlong
     - ``fur``
     - 201.168
   * - mile
     - ``mi``, ``m``
     - 1609.344

.. list-table:: Metric Units
   :header-rows: 1
   :stub-columns: 1

   * - Full Name
     - Short Name(s)
     - Scale of a Meter
   * - micrometer
     - ``um``
     - 0.000001
   * - millimeter
     - ``mm``
     - 0.001
   * - centimeter
     - ``cm``
     - 0.01
   * - decimeter
     - ``dm``
     - 0.1
   * - meter
     - ``m``
     - 1.0
   * - dekameter
     - ``dam``
     - 10.0
   * - hectometer
     - ``hm``
     - 100.0
   * - kilometer
     - ``km``
     - 1000.0
     
.. note:: The **Audio** panel settings in **Scene** tab don't have effect in RanGE.