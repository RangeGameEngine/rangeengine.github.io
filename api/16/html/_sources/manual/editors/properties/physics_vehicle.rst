
**************************
Vehicle Controller Physics
**************************

Introduction
============

The Vehicle Controller is a special type of physics object that the Physics Engine (bullet) recognizes.

It is composed of a *rigid body* representing the chassis and a set of wheels that are set to *no collision*.
Emphasizing the distinction between a Game Engine,
Logical or Render object and its representation for the Physics Engine is important.

To simulate a vehicle as a true rigid body, on top of also rigid body wheels,
with a real suspension system made with joints, would be far too complicated and unstable.
Cars and other vehicles are complicated mechanical devices and
most often we do not want to simulate that, only that it 'acts as expected'.
The Vehicle Controller exists to provide a dedicated way of simulating a vehicle behavior
without having to simulate all the physics that would actually happen in the real world.
It abstracts the complexity away by providing a simple interface with tweakable parameters such as
suspension force, damping and compression.


How It Works
============

Bullet's approach to a vehicle controller is called a "Raycast Vehicle".
Collision detection for the wheels is approximated
by ray casts and the tire friction is an anisotropic friction model.

A raycast vehicle works by casting a ray for each wheel.
Using the ray's intersection point,
we can calculate the suspension length and hence the suspension force that is then applied to the chassis,
keeping it from hitting the ground. In effect, the vehicle chassis 'floats' along on the rays.

The friction force is calculated for each wheel where the ray contacts the ground.
This is applied as a sideways and forwards force.

You can check Kester Maddock's approach to vehicle simulation
`here <https://docs.google.com/document/d/18edpOwtGgCwNyvakS78jxMajCuezotCU_0iezcwiFQc/edit>`__.
It includes some common problems, workarounds and tips and tricks.


How to Use
==========

Currently the Vehicle Controller can only be used as a constraint via Python.
There are plans to add it to the interface.


Setup
-----

You should have a body acting as the chassis, set it as a 'Rigid Body'.

The wheels should be separate objects set to 'No Collision'.
The vehicle controller will calculate the collisions for you as rays so, if you set it to something else,
it will calculate it twice in different ways and produce weird results.


Collisions
----------

A cylinder is typically a good collision shape for the wheels.
For the chassis, the shape should be rough, like a box.
If the vehicle is very complicated,
you should split it into simpler objects and parent those (with their collision shapes)
to the vehicle controller so that they will follow it.
If your vehicle even has moving bits (weapons, wrecking balls, trolleys, etc.)
they should also be simulated separately and connected to the vehicle as a joint.


Python
------

Assembling the Vehicle
^^^^^^^^^^^^^^^^^^^^^^

The overall steps are:

#. Create a constraint for the vehicle and save its ID for future reference.
#. Attach the wheels.
#. Set wheel parameters: influence, stiffness, damping, compression and friction.
#. Init variables.

You can see an example in the file below.


Controlling the Vehicle
^^^^^^^^^^^^^^^^^^^^^^^

This is done in two parts and it should be modeled according to the desired behavior.
You should think of your gameplay and research appropriate functions for the input.
For instance, can the vehicle reverse? jump? drift?
does it turn slowly? How much time does it take to brake or get to full speed?
The first part is *response to keys*.
Whenever the player presses a key, you should set a value accordingly, such as increase acceleration.
Example::

   if key[0] == events.UPARROWKEY:
       logic.car["force"] = -15.0
   elif key[0] == events.RIGHTARROWKEY:
       logic.car["steer"] -= 0.05

The second part is to *compute the movement* according to your functions::

   ## apply engine force ##
   for i in range(0, totalWheels):
       vehicle.applyEngineForce(logic.car["force"],i)
   ...
   ## slowly ease off gas and center steering ##
   logic.car["steer"] *= 0.6
   logic.car["force"] *= 0.9

Both should be run each frame.


Example
-------

The following demo file has a minimal drivable car and was taken from the book:
"Game Development with Blender" by Dalai Felinto and Mike Pan.

`vehicle_controller_demo.zip <http://download.blender.org/documentation/GE/vehicle_controller_demo.zip>`__
(last update 9 September 2014, tested with Blender 2.71)
