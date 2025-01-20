BVHTree Utilities (mathutils.bvhtree)
=====================================

.. module:: mathutils.bvhtree

BVH tree structures for proximity searches and ray casts on geometry.

.. class:: BVHTree


   .. classmethod:: FromBMesh(bmesh, epsilon=0.0)
   
      BVH tree based on :class:`BMesh` data.
   
      :arg bmesh: BMesh data.
      :type bmesh: :class:`BMesh`
      :arg epsilon: Increase the threshold for detecting overlap and raycast hits.
      :type epsilon: float


   .. classmethod:: FromObject(object, scene, deform=True, render=False, cage=False, epsilon=0.0)
   
      BVH tree based on :class:`Object` data.
   
      :arg object: Object data.
      :type object: :class:`Object`
      :arg scene: Scene data to use for evaluating the mesh.
      :type scene: :class:`Scene`
      :arg deform: Use mesh with deformations.
      :type deform: bool
      :arg render: Use render settings.
      :type render: bool
      :arg cage: Use render settings.
      :type cage: bool
      :arg epsilon: Increase the threshold for detecting overlap and raycast hits.
      :type epsilon: float


   .. classmethod:: FromPolygons(vertices, polygons, all_triangles=False, epsilon=0.0)
   
      BVH tree constructed geometry passed in as arguments.
   
      :arg vertices: float triplets each representing ``(x, y, z)``
      :type vertices: float triplet sequence
      :arg polygons: Sequence of polyugons, each containing indices to the vertices argument.
      :type polygons: Sequence of sequences containing ints
      :arg all_triangles: Use when all **polygons** are triangles for more efficient conversion.
      :type all_triangles: bool
      :arg epsilon: Increase the threshold for detecting overlap and raycast hits.
      :type epsilon: float


   .. method:: find_nearest(origin, distance=1.84467e+19)
   
      Find the nearest element (typically face index) to a point.
   
      :arg co: Find nearest element to this point.
      :type co: :class:`Vector`
      :arg distance: Maximum distance threshold.
      :type distance: float
      :return: Returns a tuple
         (:class:`Vector` location, :class:`Vector` normal, int index, float distance),
         Values will all be None if no hit is found.
      :rtype: :class:`tuple`


   .. method:: find_nearest_range(origin, distance=1.84467e+19)
   
      Find the nearest elements (typically face index) to a point in the distance range.
   
      :arg co: Find nearest elements to this point.
      :type co: :class:`Vector`
      :arg distance: Maximum distance threshold.
      :type distance: float
      :return: Returns a list of tuples
         (:class:`Vector` location, :class:`Vector` normal, int index, float distance),
      :rtype: :class:`list`


   .. method:: overlap(other_tree)
   
      Find overlapping indices between 2 trees.
   
      :arg other_tree: Other tree to preform overlap test on.
      :type other_tree: :class:`BVHTree`
      :return: Returns a list of unique index pairs,      the first index referencing this tree, the second referencing the **other_tree**.
      :rtype: :class:`list`


   .. method:: ray_cast(origin, direction, distance=sys.float_info.max)
   
      Cast a ray onto the mesh.
   
      :arg co: Start location of the ray in object space.
      :type co: :class:`Vector`
      :arg direction: Direction of the ray in object space.
      :type direction: :class:`Vector`
      :arg distance: Maximum distance threshold.
      :type distance: float
      :return: Returns a tuple
         (:class:`Vector` location, :class:`Vector` normal, int index, float distance),
         Values will all be None if no hit is found.
      :rtype: :class:`tuple`




