GPU Off-Screen Buffer (gpu.offscreen)
=====================================

.. module:: gpu.offscreen

This module provides access to offscreen rendering functions.



.. literalinclude:: ..\examples\gpu.offscreen.1.py

new(width, height, samples=0)

   Return a GPUOffScreen.

   :param width: Horizontal dimension of the buffer.
   :type width: int`
   :param height: Vertical dimension of the buffer.
   :type height: int`
   :param samples: OpenGL samples to use for MSAA or zero to disable.
   :type samples: int
   :return: Newly created off-screen buffer.
   :rtype: :class:`gpu.GPUOffscreen`


.. class:: GPUOffscreen
   This object gives access to off screen buffers.

   bind(save=True)
   
      Bind the offscreen object.
   
      :param save: save OpenGL current states.
      :type save: bool


   draw_view3d(scene, view3d, region, modelview_matrix, projection_matrix)
   
      Draw the 3d viewport in the offscreen object.
   
      :param scene: Scene to draw.
      :type scene: :class:`bpy.types.Scene`
      :param view3d: 3D View to get the drawing settings from.
      :type view3d: :class:`bpy.types.SpaceView3D`
      :param region: Region of the 3D View.
      :type region: :class:`bpy.types.Region`
      :param modelview_matrix: ModelView Matrix.
      :type modelview_matrix: :class:`mathutils.Matrix`
      :param projection_matrix: Projection Matrix.
      :type projection_matrix: :class:`mathutils.Matrix`


   free()
   
      Free the offscreen object
      The framebuffer, texture and render objects will no longer be accessible.


   unbind(restore=True)
   
      Unbind the offscreen object.
   
      :param restore: restore OpenGL previous states.
      :type restore: bool


   .. attribute:: color_texture

      Color texture.
      
      :type: int


   .. attribute:: height

      Texture height.
      
      :type: int


   .. attribute:: width

      Texture width.
      
      :type: int




