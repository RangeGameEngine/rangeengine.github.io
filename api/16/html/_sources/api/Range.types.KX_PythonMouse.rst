KX_PythonMouse(EXP_PyObjectPlus)
=================================

base class --- :class:`EXP_PyObjectPlus`

.. class:: KX_PythonMouse(EXP_PyObjectPlus)

   The current mouse.

   New MouseLook Method Example:
   
   .. code-block:: python

         from bge import *
         from collections import OrderedDict

         class CameraMouseLook(types.KX_PythonComponent):
            # Put your arguments here of the format ("key", default_value).
            # These values are exposed to the UI.
            args = OrderedDict({
            
            })

            def start(self, args):
               # Put your initialization code here, args stores the values from the UI.
               # self.object is the owner object of this component.
               self.scene = logic.getCurrentScene() # CurrentScene(Scene)
               self.keyboard = logic.keyboard.inputs # Keyboard Inputs
               self.mouse = logic.mouse.inputs # Mouse Inputs
               

            def update(self):
               # Put your code executed every logic step here.
               # self.object is the owner object of this component.
               deltaPos = logic.mouse.deltaPosition # get mouseDelta
               
               self.object.applyRotation([0, 0, -deltaPos[0]]) # apply Z rotation
               self.object.applyRotation([-deltaPos[1], 0, 0], 1) # apply X rotation
               
               logic.mouse.reCenter() # reCenter the mouse position 
               # Note: for it to work properly use this function to center the mouse on the screen.

   .. attribute:: inputs

      A dictionary containing the input of each mouse event. (Read Only).

      :type: dictionary {:ref:`keycode<mouse-keys>`::class:`SCA_InputEvent`, ...}

   .. attribute:: events

      a dictionary containing the status of each mouse event. (Read Only).

      .. deprecated:: use :data:`inputs`

      :type: dictionary {:ref:`keycode<mouse-keys>`::ref:`status<input-status>`, ...}

   .. attribute:: activeInputs

      A dictionary containing the input of only the active mouse events. (Read Only).

      :type: dictionary {:ref:`keycode<mouse-keys>`::class:`SCA_InputEvent`, ...}

   .. attribute:: active_events

      a dictionary containing the status of only the active mouse events. (Read Only).

      .. deprecated:: use :data:`activeInputs`

      :type: dictionary {:ref:`keycode<mouse-keys>`::ref:`status<input-status>`, ...}
      
   .. attribute:: position

      The normalized x and y position of the mouse cursor.

      :type: tuple (x, y)

   .. attribute:: deltaPosition

      Returns the mouse delta position. Used to create a mouselook. (Read Only).

      :type: tuple (x, y)

   .. attribute:: reCenter()

      Places the mouse in the center of the screen, can be used in conjunction with the mouseLook deltaPosition.

   .. attribute:: visible

      The visibility of the mouse cursor.
      
      :type: boolean
