=============
Moving A Cube
=============

In this short tutorial we will introduce two essential elements for logic in UPBGE: logic 
triggering and game properties. These elements allows the interactivity with the set up 
objects.

A **game property** (also known as variable) is a value that is kept inside a object, 
allowing multiple uses. A common use of game properties is the ammount life of the player, 
the current song playing, or anything else that can be useful to track for later use.

The **logic triggering** is the act of triggering some kind of event in the game. There's 
lots of ways to trigger events in UPBGE, from detecting if a key is pressed to detecting an 
object colliding with another, or even triggering events continuously without detecting 
anything. After the detection of an trigger, an event can be happen, like a object to 
move, a property be changed, etc.

-----------
Setup Scene
-----------

First, we must add objects to compose our scene. We need three basic objects:

Camera
   A camera will allow us to see our scene from a point of view.
   
Lamp
   A lamp will illuminate the scene objects, allowing us to see them. In this example we'll
   use a Hemi lamp, which is a directional lamp that illuminates all objects in the scene.

Cube
   A Cube object will be our visual feedback of our logic. As we can't see a camera or lamp,
   we'll move the Cube.

Once all objects were added, place them somewhat like the picture below:

.. figure:: /images/tutorials-move_object-initial_scene.png

   The Camera is showing the Cube, the Cube is at the center of the scene and the Hemi lamp can be anywhere.
   
Our Cube is not centered in the screen on purpose: we'll move it in the front direction 
(``-Y``), so it's good to see it moving after certain point.

------------
Adding Logic
------------

After the scene is set up, follow these steps:

- Go to the :ref:`editor-logic-bricks`.
- Add a :ref:`sensor-keyboard` through the dropdown menu named **Add Sensor**.
- Add a :ref:`controller-and` through the dropdown menu named **Add Controller**.
- Add a :ref:`actuator-motion` through the dropdown menu named **Add Actuator**.
- Connect each brick by dragging and dropping one insert into another.
   
Now we must fill some information on the bricks:

- On the :ref:`sensor-keyboard`, click on the *Key* field and press a key to assign a key to it.
- On the :ref:`actuator-motion`, insert the value ``-0.05`` in the field *Y* of *Loc*.

The :ref:`editor-logic-bricks` should look like this:

.. figure:: /images/tutorials-move_object-logic_editor_1.png

   :ref:`sensor-keyboard` > :ref:`controller-and` > :ref:`actuator-motion`

Now, start the game engine (by default, pressing :kbd:`P` while focusing the 3D Viewport). 
If you press the key you assigned to the :ref:`sensor-keyboard`, the Cube will move in the 
``-Y`` direction, and if you release the key, the Cube will stop.

This behavior happens for several reasons:

- The :ref:`sensor-keyboard` emits a positive signal when the selected key is pressed, and emits a negative signal when the key is released.
- The :ref:`controller-and` receives the signals from all connected sensors, and if all signals are positive, the controller emits an activation signal to all connected actuators, or an deactivation signal if one or more incoming signals are negative.
- The :ref:`actuator-motion` receives the activation signal from the controller and perform the motion. When it receives a deactivation signal, it stops performing the motion.

This is the basic of visual logic when using UPBGE, pretty straightforward. However, 
according to what you want to achieve, it can get a lot more complex.

-----------------------------
Logic Depending On Properties
-----------------------------

In games, the logic depends on statuses most of the time. An enemy dies when its life reaches 
``0``, the player can shoot while its ammo is greater than ``0``, and so on. In UPBGE, you 
can do these conditions through the use of properties.

To continue, perform the following steps:

- In :ref:`editor-logic-properties`, add a property through **Add Game Property**, set its name to *fuel*, its type to *Integer* and its value to ``200``.
- In :ref:`editor-logic-bricks`, add a :ref:`sensor-property`, set its evaluation type to **Greater Than**, the property to *fuel* and the value to ``0``.
- Connect the :ref:`sensor-property` to the :ref:`controller-and`, along with the :ref:`sensor-keyboard`.

.. figure:: /images/tutorials-move_object-logic_editor_2.png
   
   The property *fuel* added and the :ref:`sensor-property` properly filled.

This makes our Cube move only if the value of *fuel* is greater than ``0``. You can set the 
property *fuel* to ``0`` and play the game, and you will see that the Cube will not move. 
However, it would be good if we decrease the value of *fuel* as our Cube moves, until it 
reaches ``0``. To do that, do the following steps:

- Add a :ref:`actuator-property` and connect it to the :ref:`controller-and`.
- Set the mode of :ref:`actuator-property` to **Add**, its property to *fuel* and its value to ``-1``.
- Enable the pulse mode on :ref:`sensor-keyboard`.

.. figure:: /images/tutorials-move_object-logic_editor_3.png
   
   The sensors connected to :ref:`controller-and` and the new :ref:`actuator-property` properly filled.

There's a new factor involved here: the pulse mode on :ref:`sensor-keyboard`. By default, 
a sensor sends a single positive signal to the controller when active, and a single negative 
signal when inactive. The pulse mode makes the signal be sent each logical frame (default 
is 60 frames per second). This is useful for us now, because we need our *fuel* to be 
decreased while we press the key without the need of releasing and pressing it again.

Go ahead em play the game. The Cube will move and, after some time, it stops. It happens 
because the :ref:`actuator-property` has decreased ``1`` unit of *fuel* each frame, 
according to the :ref:`sensor-keyboard` pulse mode, and when *fuel* reaches ``0``, the 
logic of the :ref:`actuator-motion` doesn't respond anymore. It would be good, however, to 
see the value of *fuel* be decreased over time. You can do this by enabling the debug flag 
on the *fuel* property and the **Show Debug Properties** on menu *Game > Show Debug > Show 
Debug Properties*, or on the **Render** editor, as shown in the figure below.

.. figure:: /images/tutorials-move_object-debug_properties.png

----------
Conclusion
----------

The goal of this basic tutorial is to show how to work with the visual logic and properties 
on UPBGE. There's more to be discovered about visual logic and properties, like other 
:ref:`logic-properties-types`, the use of :ref:`logic-states` with logic bricks, etc, 
and those subjects can be better understood on their own pages.