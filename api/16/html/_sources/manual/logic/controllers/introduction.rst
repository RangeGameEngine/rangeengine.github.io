
************
Introduction
************

The controllers are the bricks that collect data sent by the sensors,
and also specify the state for which they operate. After performing the specified logic operations,
they send out pulse signals to drive the actuators to which they are connected.

When a sensor is activated, it sends out a positive pulse, and when it is deactivated,
it sends out a negative pulse.
The controllers' job is to check and combine these pulses to trigger the proper response.

The logic blocks for all types of controller may be constructed and changed using
the Logic Editor; details of this process are given
in the :doc:`Controller Editing <./editing>` page.


Controller Types
================

There are eight types of controller logic brick to carry out the logic process on
the input signal(s).
This table gives a quick overview of the logic operations performed by
the logical controller types. The first column, input,
represents the number of positive pulses sent from the connected sensors.
The following columns represent each controller's response to those pulses.
True means the conditions of the controller are fulfilled,
and the actuators it is connected to will be activated;
false means the controller's conditions are not met and nothing will happen. Please consult
the individual controller pages for a more detailed description of each controller.

.. note::

   It is assumed that more than one sensor is connected to the controller.
   For only one sensor, consult the "All" line.

.. list-table::
   :header-rows: 1

   * - Positive sensors
     - Controllers
     - ..
     - ..
     - ..
     - ..
     - ..
   * - ..
     - :doc:`AND <./types/and>`
     - :doc:`OR <./types/or>`
     - :doc:`XOR <./types/xor>`
     - :doc:`NAND <./types/nand>`
     - :doc:`NOR <./types/nor>`
     - :doc:`XNOR <./types/xnor>`
   * - None
     - False
     - False
     - False
     - True
     - True
     - True
   * - One
     - False
     - True
     - True
     - True
     - False
     - False
   * - Multiple, not all
     - False
     - True
     - False
     - True
     - False
     - True
   * - All
     - True
     - True
     - False
     - False
     - False
     - True
