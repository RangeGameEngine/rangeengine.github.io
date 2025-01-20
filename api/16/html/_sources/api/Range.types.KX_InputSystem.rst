KX_InputSystem(EXP_PyObjectPlus)
=================================

base class --- :class:`EXP_PyObjectPlus`

.. class:: KX_InputSystem(EXP_PyObjectPlus)

   The current input system context.

   Input System Method Example:
   
   .. code-block:: python

      from Range import *
      from collections import OrderedDict

      class ExampleInputSystem_Component(types.KX_PythonComponent):
         # Put your arguments here of the format ("key", default_value).
         # These values are exposed to the UI.
         args = OrderedDict({})
         
         def awake(self, args):
            # Put your initialization code here, unlike start, awake initializes first.
            # useful to make sure the values are accessible in start and update function.
            
            # Example to modify a key
            # changeKeyMap() and changeSensitivity() can return a bool indicating whether the change was successful
            changed = logic.inputSystem.changeKeyMap(inputMap="myMap", inputTable="myTable", name="keyboard", keyType="UP", value=events.WKEY)
            print(changed)
            changed = logic.inputSystem.changeSensitivity(inputMap="myMap", inputTable="myTable", name="joystick", value=1.0)
            print(changed)
            
            # Reload InputSystem after modifying keys on awake,
            # because after reloading the previous values ​​are released from memory and the new ones will only be available on the next tick.
            logic.inputSystem.reloadInputMaps()

         def start(self, args):
            # Put your initialization code here, args stores the values from the UI.
            # self.object is the owner object of this component.
            
            # get input system.
            self.inputSystem = logic.inputSystem.inputMaps
            
         def update(self):
            # Put your code executed every logic step here.
            # self.object is the owner object of this component.
            
            # Test.
            if (self.inputSystem["myMap"]["myTable"].released):
                  print("Released")
                  
            # Example of use.
            movement = self.inputSystem["myMap"]["myTable"].values
            self.object.applyMovement([movement[0], movement[1], 0], 0)

   .. attribute:: inputMaps

      A dictionary containing the input of each mouse event. (Read Only).

      :type: dictionary {InputMapName : dictionary { InputTableName ::class:`KX_InputTable`, ...}, ...}

   .. attribute:: changeKeyMap(inputMap, inputTable, name, keyType, value)

      Change the value of a bind.

      :arg inputMap: The name of the inputMap.
      :type inputMap: string
      :arg inputTable: The name of the inputTable.
      :type inputTable: string
      :arg name: The name of the bind.
      :type name: string
      :arg keyType: The value of the bind you want to change, for example if it is a 4-button bind ("UP", "DOWN", "LEFT" or "RIGHT").
      :type keyType: string
      :arg value: The value to replace in the bind.
      :type value: :ref:`keycode<keyboard-keys>`

      :returns: a boolean to indicate whether the change was made successfully.

   .. attribute:: changeSensitivity(inputMap, inputTable, name, value)

      Change the sensitivity value of a bind.

      :arg inputMap: The name of the inputMap.
      :type inputMap: string
      :arg inputTable: The name of the inputTable.
      :type inputTable: string
      :arg name: The name of the bind.
      :type name: string
      :arg value: The value to replace in the sensitivity.
      :type value: float

      :returns: a boolean to indicate whether the change was made successfully.

   .. method:: reloadInputMaps()

      Reloads all inputmaps saved on the hard drive.
