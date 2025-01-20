KDTree Utilities (mathutils.kdtree)
===================================

.. module:: mathutils.kdtree

Generic 3-dimentional kd-tree to perform spatial searches.



.. literalinclude:: __/examples/mathutils.kdtree.py

.. class:: KDTree

   KdTree(size) -> new kd-tree initialized to hold ``size`` items.
   
   .. note::
   
      :class:`KDTree.balance` must have been called before using any of the ``find`` methods.

   .. method:: balance()
   
      Balance the tree.
   
   .. note::
   
      This builds the entire tree, avoid calling after each insertion.


   .. method:: find(co, filter=None)
   
      Find nearest point to ``co``.
   
      :arg co: 3d coordinates.
      :type co: float triplet
      :arg filter: function which takes an index and returns True for indices to include in the search.
      :type filter: callable
      :return: Returns (:class:`Vector`, index, distance).
      :rtype: :class:`tuple`


   .. method:: find_n(co, n)
   
      Find nearest ``n`` points to ``co``.
   
      :arg co: 3d coordinates.
      :type co: float triplet
      :arg n: Number of points to find.
      :type n: int
      :return: Returns a list of tuples (:class:`Vector`, index, distance).
      :rtype: :class:`list`


   .. method:: find_range(co, radius)
   
      Find all points within ``radius`` of ``co``.
   
      :arg co: 3d coordinates.
      :type co: float triplet
      :arg radius: Distance to search for points.
      :type radius: float
      :return: Returns a list of tuples (:class:`Vector`, index, distance).
      :rtype: :class:`list`


   .. method:: insert(co, index)
   
      Insert a point into the KDTree.
   
      :arg co: Point 3d position.
      :type co: float triplet
      :arg index: The index of the point.
      :type index: int




