#Video23
1. When I tried to add the delete button url,tehre were these two attributes also it gave an error like below

  023_document_object.html?task=walk+the+dog:11 Failed to find a valid digest in the 'integrity' attribute for resource   'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' with computed SHA-256 integrity 'eZrrJcwDc/3uDhsdt61sL2oOBY362qM3lon1gyExkL0='. The resource has been blocked.

- When I removed these two attributes, the issue solved
    integrity="sha384-wvfXpqpZZVQGK6TAh5PV1GOfQNHSoD2xbE+QkPxCAF1NEevoEH3S10sibVcOQVnN" 
    crossorigin="anonymous"
  Did not check the reason for this.


  2. In the video 41, though the input has been set as integer, the letter e is being taken as input. Is that a bug??