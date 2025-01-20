.. _bpy.types.ExpressionController:

*********************
Expression Controller
*********************

.. seealso::
   See the Python reference of this logic brick in :class:`SCA_IController`.

This controller evaluates a user written expression, and gives a positive (``TRUE``) output when
The result of the expression is ``TRUE``, and
The object is in the designated State.
For all other conditions the controller gives a negative (``FALSE``) output.

.. figure:: /images/logic-controllers-types-expression-node.png

   Expression Controller.


Expression
==========

The expression, which is written in the field, can consist of variables,
constants and operators. These must follow the rules laid out below.


Variables
=========

You can use:

- *sensors names*,
- *properties*: assign a game property to an object and use it in a controller expression.

These cannot contain blank spaces.


Operations
==========

Mathematical Operations
-----------------------

Operators: ``*``, ``/``, ``+``, ``-``

Returns: a number

Examples: ``3 + 2``, ``35 / 5``


Logical Operations
------------------

- Comparison operators: ``<``, ``>``, ``>=``, ``<=``, ``==``, ``!=``
- Booleans operators: ``AND``, ``OR``, ``NOT``

Returns: ``True`` or ``False``.

Examples: ``3 > 2 (True)``, ``1 AND 0 (False)``


Conditional Statement (if)
==========================

Use::

   if( expression, pulse_if_expression_is_true, pulse_if_expression_is_false )

If the controller evaluates ``expression`` to True:

- if ``pulse_if_expression_is_true`` is ``True``, the controller sends a positive pulse to the connected actuators.
- if ``pulse_if_expression_is_true`` is ``False``, the controller sends a negative pulse to the connected actuators.

If the controller evaluates ``expression`` to False:

- if ``pulse_if_expression_is_false`` is ``True``, the controller sends a positive pulse to the connected actuators.
- if ``pulse_if_expression_is_false`` is ``False``, the controller sends a negative pulse to the connected actuators.


Examples
========

Given the object has a property ``coins`` equal to 30::

   coins > 20

returns ``True`` (the controller sends a positive pulse to the connected actuators).

Given the object has:

- A sensor called ``Key_Inserted`` equal to ``True``.
- A property named ``Fuel`` equal to ``False``.

.. code-block:: python

   Key_Inserted AND Fuel.

Will return ``False`` (the controller sends a negative pulse to the connected actuators).

This is the same as doing::

   if (Key_Inserted AND Fuel, True, False)

Instead, you could do::

   if (Key_Inserted AND Fuel, False, True)

to return a positive pulse when ``Key_Inserted AND Fuel`` returns False.

You can also do::

   if ((Key_Inserted AND Fuel) OR (coins > 20), True, False)

This expression returns True,
hence in this case the controller sends a positive pulse to the connected actuators.


Parts of the Expression Controller
==================================

.. figure:: /images/logic-controllers-types-expression-part.png

   The Expression to calculate.

.. 1. Expression.

See :ref:`standard controller parts <standard-controller-parts>` for descriptions of the remaining options.
