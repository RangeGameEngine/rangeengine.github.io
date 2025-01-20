
******************
Rigid Body Physics
******************

.. figure:: /images/editors-properties-physics-rigid_body.png

   Rigid Body collision type in Physics tab.

It will give/receive collisions and react with a change in its velocity and its rotation.
A rigid body ball would begin rotating and roll down (where a 
:doc:`Dynamic <./physics_dynamic>` 
ball would only hit and slide down the ramp).

The idea behind rigid body dynamics is that the mesh does not deform. If you need 
deformation you will need to either go to
:doc:`Soft Body <./physics_soft_body>` 
or else fake it with animated Actions.

For more documentation, see the general :doc:`physics page <./physics>`.

Options
=======

Actor
   Enables detection by Near and Radar Sensors.
   
Ghost
   Disables collisions completely, similar to 
   :doc:`No collision <./physics_no_collision>`.
   
Invisible
   Does not display, the same as setting the object to unrendered (such as unchecking the 
   camera icon in the Outliner).
   
Use Force Field
   Materials can have physics settings on them as well: Friction, Elasticity, Force 
   Field (positive or negative force), and also Dampening to other materials. When you 
   turn on this checkbox, you are enabling the Material to exhibit this spring force.
   
Rotate From Normal
   Todo.
   
No Sleeping
   Prevents simulation meshes from sleeping. When an object has a linear velocity or 
   angular velocity, it is in motion. It will detect collisions, receive gravity, etc. 
   Once these thresholds are close to zero, it will cease these calculations -- until 
   another object interacts with it wake it up.

Attributes
   Mass
      Affects the reaction due to collision between objects -- more massive objects have 
      more inertia. Will also affect material force fields. Will also change behaviors if 
      you are using the suspension and steering portions of Bullet physics.

   .. _game-engine-physics-collision-bounds-radius:

   Radius
      If you have the "Collision Bounds: Sphere"
      set explicitly (or implicitly through having the Collision Bounds subpanel unchecked),
      this will multiply with the Object's (unapplied) Scale. Note that none of the other 
      bounds types are affected. Also note that in the 3D View the display will show this 
      for all types, even though it is only actually used with Sphere.

   .. list-table::
      :header-rows: 1

      * - Basic
        - Radius= 1.5
        - Unapplied Scale
        - Applied Scale
        - Collision Bounds

      * - Rolls, radius of 1 BU
        - Rolls, radius of 1.5 BU (after "popping" upward)
        - Rolls, radius of 1.5 BU
        - Rolls, radius of 1 BU (!)
        - Default (which is Sphere)

      * - Slides, extent of 1 BU
        - Slides, extent of 1 BU
        - Slides, extent of 1 BU
        - Slides, extent of 1 BU
        - Box

      * - ""
        - ""
        - ""
        - ""
        - Convex Hull

      * - Slides, extent of 1 BU (but with more friction than above)
        - Slides, extent of 1 BU (but with more friction than above)
        - Acts insane
        - Slides extent of 1.5 BU
        - Triangle Mesh

   Form Factor
      For affecting the Inertia Tensor. The higher the value, the greater the rotational 
      inertia, and thus the more resistant to torque. You might think this is strange, 
      considering Dynamic types do not have torque in response to collisions -- but you can 
      still see this value's effects when you manually apply Torque.

   Elasticity
      The elasticity of collisions determines how much of the kinetic energy is retained 
      after the collision. A value of 1 will result in a collision where objects bounce off 
      each other, and the kinetic energy after the collision is the same as before. A value 
      of 0 will result in a collision where the objects stick together after the collision, 
      as all energy will have been converted to heat (or other energy forms that Blender 
      also does not model).

      In macroscopic nature (so bigger than atomic particles) an elasticity of 1 is never 
      seen, as at least some energy is converted to heat, sound, etc. An elastic 
      (elasticity=high) collision occurs when two metal balls collide. An inelastic 
      (elasticity=low) collision is seen when two half-inflated beach balls collide.
   
Anisotropic Friction
   Isotropic friction is identical at all angles. Anisotropic is directionally-dependent.
   Here you can vary the coefficients for the three axes individually, or disable 
   friction entirely.
   
Linear Velocity
   Limit the linear speed of an object.

   Minimum
      The object is allowed to be at complete rest, but as soon as it accelerates it will 
      immediately jump to the minimum speed.
      
   Maximum
      Top speed of the object.
   
Angular Velocity
   Limit the angular speed of an object.

   Minimum
      Clamp angular velocity to this minimum speed (except when totally still), in angle 
      per second.
      
   Maximum
      Clamp angular velocity to this maximum speed, in angle 
      per second.
      
Damping
   Increase the "sluggishness" of the object.

   Translation
      Resist movement (0 - 1). At 1 the object is completely immobile.
      
   Rotation
      Resist rotation, but not the kind of rotation that comes from a collision. For 
      example, if a Motion Controller applies Torque to an object, this damping will be 
      a factor.
      
Lock Translation
   Seize the object in the world along one or more axes. Note that this is global 
   coordinates, not local or otherwise.
   
Lock Rotation
   Same as translation, but for rotation (also with respect to the global coordinates).

Friction
   Coulomb friction coefficient when inside the physics distance area.

Force Field
   Controls force field settings.

   Force
      Upward spring force when inside the physics distance area.
      
   Distance
      Distance of physics area.
      
   Damping
      Damping of the spring force when inside the physics distance area.
      
   Align to Normal
      Align dynamic game objects along the surface normal when inside the physics 
      distance area.