export default ['$sce', function ($sce) {
  return function(url) {
      return $sce.trustAsResourceUrl(url);
  }
}]
