==============
Basic Concepts
==============

---------
Game Loop
---------

The game loop is something that every game or general software has: it consists of several 
processing steps and then, repeating it. To make it clear, think of a video player 
processing steps:

- It reads a portion of the video file from disk.
- It decodes the read file portion into a image.
- It shows the decoded image in the screen as a single frame.
- It repeats everything from the start.

Nevertheless, this article will present you how the game loop is built in UPBGE.
It is essential to know how it works: if you keep that in mind, it will explain a lot of 
mysterious behavior that you might discover.

.. figure:: /images/tutorials-getting_started-game_loop.png
   
   Game loop diagram.

Each cycle in the game loop represents a logical frame, also known as logic tick. 
It is the smallest time unit within your game. In each loop:

- The scenes are processed.
- The devices are checked for input.
- The final image is rendered.

It is important to know that the render part might be skipped if the last frame was 
spending too much processing time , resulting in lag. There is a limit on how much renders 
can be skipped (default = 5). If this limit exceeds, a render will take place regardless 
how long it takes. Such 'render' lags will result in 'logic' lags, making the game run 
slower than expected.

----------
Scene Loop
----------

.. figure:: /images/tutorials-getting_started-scene_loop.png
   
   Scene loop diagram.

This loop is a bit more complex. The scenes loop cycles through all active scenes 
performing the following steps for each scene:

- Logic processing
   This first step processes the logic of the game, be it visual or Python.
- Physics update
   The physics update will be done after the logic runs, but before the render is drawn.
- Sound playing
   The sound playing is put in the last step of the scene loop.

Once all these steps are taken for all active scenes, the main loop continues.

-----------
Logic Ticks
-----------

The logic processing works through frames called *logic ticks*. By default, a game 
running at 60 frames per second also can run 60 logic ticks per second. In practical 
examples:

- If I have a number 0 and increase it by 1 each frame, after 1 second its value 
  will be 60.

- If I have an object and move it 0.1 meters each frame, after 1 second it 
  should have been moved 6 meters.

In UPBGE you can control the logic tick intervals for each object by skipping a given ammount 
of ticks, allowing you to run logic at exact custom time intervals or optimize logic which 
doesn't need to run each frame. The following diagram shows how logic tick skipping work.

.. figure:: /images/tutorials-getting_started-logic_ticks_diagram.png
   
   Logic tick skipping diagram.

In the given diagram, where dark red is logic execution and grey is a interval:

1. No ticks skipped between logic ticks, the logic runs each game frame.
2. Skipping of 2 ticks between each logic execution.
3. Skipping of 6 ticks between each logic execution.

To understand how the game loop and logic triggering works is important for you to shape 
the way your logic will be made and understand internal behaviors that UPBGE may show.