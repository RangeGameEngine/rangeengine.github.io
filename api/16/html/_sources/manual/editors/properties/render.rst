
******
Render
******

The **Render** tab in :doc:`Properties Editor </manual/editors/properties/index>` exposes 
options related to game screen rendering.

Some of the options showed here may behave differently according to the conditions, as 
there are two separate game "players" for previewing the game during development. Note 
that while RanGE is running in either player, the computer's mouse and keyboard 
are captured by the game and by default, the mouse cursor is not visible (this can be 
changed in the :ref:`Display panel <editors-properties-render-display>` of this tab). 
To exit the game, press the :kbd:`Esc` key.

.. note:: Make sure that the render engine is set to **Range Engine** when attempting to set these 
   controls, otherwise this description will not apply to what you see!

In **Render** tab, there are several panels available, as shown. Each one can be expanded 
or contracted using the usual triangle button. The features in each panel will be 
described in details below.

.. _editors-properties-render-embedded-player:

Embedded Player
===============

.. figure:: /images/editors-properties-render-embedded_player.png

   Embedded Player panel.

This panel provides information for the **Embedded Player** which allows games to be run
inside the RanGE **3D View**. The **Embedded Player** renders onto the **3D View** 
editor in the RanGE GUI using the current perspective and zoom level of the **3D View**.

Note that the *Resolution* settings are independent of the size of the viewport preview 
pane. In fact, the *Resolution* controls seem to have no effect at all. The resolution 
and aspect ratio of the embedded preview are always fixed to the **3D View** editor, 
which behaves much like the *Extend* framing mode for the 
:ref:`Standalone Player<editors-properties-render-standalone-player>`.

Start
   Starts RanGE inside the current **3D View**. Shortcut :kbd:`P` while mouse 
   hovers the desired **3D View**.
   
Resolution X/Y
   Sets the internal X/Y rendering resolution.

.. _editors-properties-render-standalone-player:

Standalone Player
=================

.. figure:: /images/editors-properties-render-standalone_player.png

   Standalone Player panel.

This panel provides information for the **Standalone Player** which allows games to be 
run without RanGE.

The **Standalone Player** renders the scene from the perspective of the active scene 
camera and either creates a new desktop window or switches into fullscreen rendering mode. 

The semantics of the **Standalone Player**'s *Resolution* controls differ for Windowed 
and Fullscreen modes. In Windowed mode (*Fullscreen* checkbox unchecked), the 
*Resolution* controls set the initial dimensions of the desktop window. The user may 
resize the window at any time, causing the rendering resolution to change accordingly. 
In Fullscreen mode (*Fullscreen* checkbox checked), the *Resolution* controls set the 
internal rendering resolution. The actual display resolution will be a best fit depending 
on the user's hardware. In either mode, the aspect ratio/cropping/scaling are determined 
by the *Framing* selection under the **Display** panel.

Regarding *Fullscreen* mode, it is important to remember that the *Resolution* settings 
in *Fullscreen* mode are only hints to the operating system. Each display and monitor 
combination will have a different set of resolutions that they are capable of displaying; 
so there can be little confidence that all end-users will actually get the resolution you 
suggest; unless you choose one of the most standard resolutions (e.g. 800x600 or 1024x768).
If you insist on using higher resolutions, then you may want to state clearly in your 
documentation that only certain resolutions are supported. In most other cases, the user's 
machine may select a resolution that is close to the one suggested; but the results can 
be unpredictable, especially in *Letterbox* framing mode.

Note that the *Desktop* checkbox has no effect in Windowed mode.

Start
   Launches the current blend file with the **Standalone Player**.
   
Resolution
   
   X
      Sets the X window size or fullscreen display resolution.
      
   Y
      Sets the Y window size or fullscreen display resolution.
      
Fullscreen
   
   Off
      Opens standalone game as a new window.
      
   On
      Opens standalone game in fullscreen.
      
Desktop
   
   Off
      Attempts to obey the *Resolution* specified above when in *Fullscreen* mode.
      
   On
      Keeps the current desktop resolution when in *Fullscreen* mode.
      
Quality
   
   AA Samples
      The number of AA samples to use for MSAA.
      
   Bit Depth
      Number of bits used to represent color of each pixel in fullscreen display.
      
   Refresh Rate
      Number of frames per second of fullscreen display.

.. _editors-properties-render-stereo:

Stereo
======

.. figure:: /images/editors-properties-render-stereo.png

   Stereo panel.

Toggle if use an stereo mode and, if use, select a stereo mode that will be used to 
capture stereo images of the game (and also, by implication, that stereo displays will 
use to render images in the 
:ref:`Standalone Player<editors-properties-render-standalone-player>`).

None
   Render single images with no stereo.
   
Stereo
   Render dual images for stereo viewing using appropriate equipment. See 
   :doc:`Stereo Camera </manual/editors/properties/render_stereo>` 
   for full details of available options.

.. _editors-properties-render-shading:
   
Shading
=======

.. figure:: /images/editors-properties-render-shading.png

   Shading panel.

Specifies each singe visual components that will be rendered in the game.

Lights
   Toggles lights rendering.

Shaders
   Toggles GLSL shaders.

Shadows
   Toggles realtime shadows from lamps.

Environment Lighting
   Toggles environment lighting from 
   :doc:`World tab </manual/editors/properties/world>`.

Ramps
   Toggles material ramps.

Nodes
   Toggles material nodes.

Extra Textures
   Toggles extra textures, like normal or specular maps.

.. _editors-properties-render-system:

System
======

.. figure:: /images/editors-properties-render-system.png

   System panel in the Render tab.

The **System** panel at the Render tab lets the game developer specify options about 
the system performance regarding to frame discard and restrictions about frame rendering, 
the key to stop RanGE, etc.

Use Frame Rate
   Respect the frame rate rather than rendering as many frames as possible. When 
   unchecked, this will inform RanGE to run freely without frame rate restrictions. 
   The frame rate is specified at the **Display** panel, also in the **Render** tab. For 
   more information about frame rates, see 
   :ref:`Display panel <editors-properties-render-display>`.
   
Deprecation Warnings
   Every time when the game developer uses a deprecated functionality (which in some 
   cases are outdated or crippled OpenGL Graphic cards functions), the system will emit 
   warnings about the deprecated function on the console.
   
Vsync
   Change Vsync settings.
   
AA Samples
   Set how many samples use in anti-aliasing.
   
HDR
   The precision of the screen display (between 8, 16 and 32 bits).
   
Exit Key
   This button specifies which key-press will exit the game.

.. _editors-properties-render-animations:

Animations
==========

.. figure:: /images/editors-properties-render-animations.png

   Animations panel in the Render tab.

Specifies animations settings of game, like frame rate.

Animation Frame Rate
   This number button/slider specify the maximum frame rate at which the game will run.
   Minimum is 1, maximum is 120.
   
Restrict Animation Updates
   Restrict number of animation updates to the animation FPS. This is better for 
   performance, but can cause issues with smooth playback. When checked, this will force 
   RanGE to discard frames (even at the middle of redrawing, sometimes causing tearing 
   artifacts) if the rate of frames rendered by the GPU is greater than the specified on 
   :ref:`Display panel <editors-properties-render-display>`.
   
.. _editors-properties-render-display:

Display
=======

.. figure:: /images/editors-properties-render-display.png

   Display panel at the Render tab.

The **Display** panel in the **Render** tab lets the game developer specify whether the 
mouse cursor is shown during the game execution, and options to specify the framing style 
of the game to fit the window with the specified resolution.

Mouse Cursor
   Whether to show or not the mouse cursor when the game is running.
   
Framing
   Selects how the scene is to be fitted onto the display window or screen. There are 
   three types of framing available:

   Letterbox
   
      In Windowed mode:
         Maintains a 4:3 aspect ratio by scaling to fit the current window dimensions 
         without cropping, covering any portions of the display that lie outside of the 
         aspect ratio with color bars.
         
      In Fullscreen mode:
         The behavior of this combination seems to be heavily dependent on the user's 
         hardware. The result can be quite unpredictable, especially when the resolution 
         and aspect ratio differ too much from the machine's capabilities. For this 
         reason, *Extend* mode should be preferred for *Fullscreen* applications.
         
   Extend
      This mode behaves much like *Letterbox* mode, maintaining a 4:3 aspect ratio by
      scaling whenever possible; except that the camera frustum is expanded or contracted
      wherever necessary to fill any portions of the display that lie outside of the 
      aspect ratio, instead of covering those portions of the scene with color bars, as 
      with *Letterbox* mode, or distorting then scene, as with *Scale* mode.
      
   Scale
      In this mode, no attempt is made to maintain a particular aspect ratio. The scene 
      and objects within will be stretched or squashed to fit the display exactly.
      
Color Bar
   This will let the game developer choose the bar colors when using the *Letterbox* 
   Framing mode.

.. _editors-properties-render-debug:

Debug
=====

.. figure:: /images/editors-properties-render-debug.png

   Debug panel at the Render tab.

The **Debug** panel at the **Render** tab toggles various specific debug helpers on RanGE, 
from frame rate being showed on the screen to detailed physics visualization of specific 
elements, like armatures and camera frustum.

Framerate and Profile
   When checked, this will show values for each of the calculations RanGE is doing 
   while the game is running on the top left of the screen.
   
Render Queries
   Shows render queries information while the game runs.
   
Properties
   When checked, the values of any properties which are selected to be debugged in the 
   objects are shown on the top left side of the screen.
   
Physics Visualization
   Shows a visualization of physics bounds and interactions (like hulls and collision 
   shapes), and their interaction.
   
The following remaining options are dropdown menus which allows the following options:
- Disable: Disables the debug of the current option.
- Allow: Allow debugging from individual settings of the current option.
- Force: Allow debugging of the current option.

Bounding Box
  Shows bounding volume boxes of objects while the game is running.
  
Armatures
  Shows armatures while the game is running.
  
Camera Frustum
  Shows camera limits visualization according to the current viewport dimensions while 
  the game is running.
  
Shadow Frustum
  Shows lamp's shadows bounds while the game is running.

.. _editors-properties-render-bake:
   
Bake
====

The **Bake** panel in the **Render** tab is very similar to its **RanGE Render** 
counterpart and serves much the same purpose.
for further details.

.. figure:: /images/editors-properties-render-bake.png

   Bake panel at the Render tab (showing different bake modes).

Bake
   Bake image textures of selected objects.
   
Bake Mode
   Shading information to bake into the image.

   Full Render
      Bakes all materials, textures, and lighting except specularity and SSS.
      
   Ambient Occlusion
      Bakes ambient occlusion as specified in the World panels. Ignores all lights in 
      the scene.
      
   Shadows
      Bakes shadows and lighting.
      
   Normals
      Bakes tangent and camera-space normals (among many others) to an RGB image.
      
   Textures
      Bakes colors of materials and textures only, without shading.
      
   Displacement
      Similar to baking normal maps, displacement maps can also be baked from a high-res 
      object to an unwrapped low-res object, using the Selected to Active option.
      
   Derivative
      Bake derivative map.
      
   Vertex Colors
      Bake vertex colors.
      
   Emissions
      Bakes Emit, or the Glow color of a material.
      
   Alpha
      Bakes Alpha values, or transparency of a material.
      
   Mirror Intensity
      Bake mirror intensity values.
      
   Mirror Colors
      Bake mirror colors.
      
   Specular Intensity
      Bake specular intensity values.
      
   Specular Colors
      Bake specular colors.
      
Bake from Multiresolution
   Bake directly from a multi-resolution object.
   
Normalized
   
   In Displacement Mode:
      Normalize to the distance.
      
   In Ambient Occlusion Mode:
      Normalize without using material's settings.
      
Normal Space
   Normals can be baked in different spaces:

   Camera space
      Default method.
      
   World space
      Normals in world coordinates, dependent on object transformation and deformation.
      
   Object space
      Normals in object coordinates, independent of object transformation, but dependent 
      on deformation.
      
   Tangent space
      Normals in tangent space coordinates, independent of object transformation and 
      deformation. This is the new default, and the right choice in most cases, since 
      then the normal map can be used for animated objects too.
      
Bake to Vertex Color
   Bake to vertex colors instead of to a UV-mapped image.
   
Clear
   If selected, clears the image to selected background color (default is black) before 
   render.
   
Margin
   Baked result is extended this many pixels beyond the border of each UV "island", to 
   soften seams in the texture.
   
Selected to Active
   Bake shading on the surface of selected objects to the active object.

   Distance
      Maximum distance in RanGE units from active object to other object.
      
   Bias
      Bias in RanGE units toward faces further away from the object.
      
Split
   The method used to split a quad into two triangles for baking.

   Fixed
      Split quads predictably (0,1,2)(0,2,3).
      
   Fixed Alternate
      Split quads predictably (1,2,3)(1,3,0).
      
   Automatic
      Split quads to give the least distortion while baking.
      
User Scale
   Apply a custom scale to the derivative map instead of normalizing to the default (0.1).

.. toctree::
   :maxdepth: 1
   :caption: More Info
   
   render_stereo