.. _bpy.types.RandomActuator:

***************
Random Actuator
***************

.. seealso::
   See the Python reference of this logic brick in :class:`SCA_RandomActuator`.

The *Random Actuator* creates a random value which can be stored in a property of the object.

.. figure:: /images/logic-actuators-types-random-bool_constant.jpg

   Random Actuator.


Properties
==========

Seed
   Starting seed for random generator.


Distribution
------------

Distributions from which to select the random value. The default entry of *Boolean Constant*
gives either True or False, which is useful for test purposes.

Each distribution has one common property called: *Property*.
This can be either a float, integer, or a boolean depending on the distribution type.

Float Neg. Exp.
   Values drop off exponentially with the specified half-life time.

   Half-Life Time
      Half-life time.
Float normal
   Random numbers from a normal distribution.

   Mean
      Mean of normal distribution.
   SD
      Standard deviation of normal distribution.
Float uniform
   Random values selected uniformly between a minimum (*Min*) and maximum (*Max*) values.
Float constant
   Returns a constant value specified in the *Value* field.
Int Poisson
   Random numbers from a `Poisson distribution <https://en.wikipedia.org/wiki/Poisson_distribution>`__.
   The mean of the equation is defined by the *Mean* value.
Int uniform
   Random values selected uniformly between a minimum (*Min*) and maximum (*Max*) values.
Int constant
   Returns a constant value specified by the *Value* field.
Bool Bernoulli
   Returns a random distribution using
   the `Bernoulli distribution <https://en.wikipedia.org/wiki/Bernoulli_distribution>`__
   with specified ratio of ``TRUE`` pulses. This ratio is calculated by the *Chance* value.
Bool uniform
   A 50/50 chance of obtaining True/False.
Bool constant
   Returns a constant value specified in the value field, must be either ``True`` or ``False``.


Example
=======
