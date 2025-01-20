KX_InputTable(EXP_PyObjectPlus)
===============================

base class --- :class:`EXP_PyObjectPlus`

.. class:: KX_InputTable(EXP_PyObjectPlus)

   The current input system context.

   .. attribute:: values
   
      A list of existing value of the input from the last frame. (read-only)

      Example to get the values ​​of a 2D VECTOR type bind:

      .. code-block:: python

         import Range

         inputSystem = Range.logic.inputSystem.inputMaps
         values = inputSystem["myMap"]["myTable"].values

         print("Values: x: {0}, y: {1}".format(values[0], values[1]))

      :type: tuple of float.

   .. attribute:: active

      True if the input was active from the last frame.

      :type: boolean

   .. attribute:: activated

      True if the input was activated from the last frame.

      :type: boolean

   .. attribute:: released

      True if the input was released from the last frame.

      :type: boolean
