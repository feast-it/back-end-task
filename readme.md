Task 1:

Implement an endpoint which will get a supplier by id.

example input: /suppliers/supplier/001C768B-6BD6-4C87-90E1-E8C7B9A580C4

example output:

```json
{
  "uuid": "001C768B-6BD6-4C87-90E1-E8C7B9A580C4",
  "name": "Mangiamo Wood Fired Pizza",
  "slug": "mangiamo-wood-fired-pizza",
  "tags": ["Pizza", "Pasta"],
  "distance": 18500,
  "min_spend": 1500,
  "vertical": "food"
}
```

Task 2:

Implement an endpoint which returns suppliers grouped by their vertical.

example input: /suppliers/verticals
example output:

```json
{
  "food": [
    {
      "uuid": "001C768B-6BD6-4C87-90E1-E8C7B9A580C4",
      "name": "Mangiamo Wood Fired Pizza",
      "slug": "mangiamo-wood-fired-pizza",
      "tags": ["Pizza", "Pasta"],
      "distance": 18500,
      "min_spend": 1500,
      "vertical": "food"
    },
    {
      "uuid": "0029DAFC-E8A1-47FB-AEBC-C94E816D111E",
      "name": "Chipsy",
      "slug": "chipsy",
      "tags": ["Fish", "Chips"],
      "distance": 1200,
      "min_spend": 800,
      "vertical": "food"
    },
    {
      "uuid": "0340E37A-1E06-4943-B9B5-8EDB7C8D2806",
      "name": "La Paella Paella",
      "slug": "la-paella-paella",
      "tags": ["Paella", "Tapas"],
      "distance": 12500,
      "min_spend": 1000,
      "vertical": "food"
    }
  ],
  "photography": [
    {
      "uuid": "03744BAD-B2B1-48D4-9011-38104CD874E0",
      "name": "True Story Photo",
      "slug": "laura-maclean-photography",
      "tags": ["Candid", "Black & White"],
      "distance": 1200,
      "min_spend": 800,
      "vertical": "photography"
    }
  ],
  "florists": [
    {
      "uuid": "0AE16700-CDC9-4D92-B2B7-9ECB39E2ECDB",
      "name": "Flowers & Plants Co.",
      "slug": "flowers-and-plants-co",
      "tags": ["Bridal Bouquets", "Floral Baskets"],
      "distance": 12500,
      "min_spend": 1000,
      "vertical": "florists"
    }
  ]
}
```

Task 3:

Implement an endpoint which will return suppliers that satisfy the search parameters.
Search conditions on each field are following:
uuid - full string match
name - full string match
slug - full string match
tags - resulting object should include any tag from the search array
distance - resulting object should have less or equal distance than the one in the search
mis_spend - resulting object should have more or equal mis_spend that the one in the search
vertical - full string match

example input: /suppliers/search?tags=Pizza&tags=Fish&min_spend=800
example output:

```json
[
  {
    "uuid": "001C768B-6BD6-4C87-90E1-E8C7B9A580C4",
    "name": "Mangiamo Wood Fired Pizza",
    "slug": "mangiamo-wood-fired-pizza",
    "tags": ["Pizza", "Pasta"],
    "distance": 18500,
    "min_spend": 1500,
    "vertical": "food"
  },
  {
    "uuid": "0029DAFC-E8A1-47FB-AEBC-C94E816D111E",
    "name": "Chipsy",
    "slug": "chipsy",
    "tags": ["Fish", "Chips"],
    "distance": 1200,
    "min_spend": 800,
    "vertical": "food"
  }
]
```
