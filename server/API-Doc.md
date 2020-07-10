## Server API

### Get hotel info
  * GET `/api/photos/:hotelId`

**Path Parameters:**
  * `hotelId` hotel id

**Success Status Code:** `200`

**Returns:** JSON

```json
    {
      "hotelId": "Number",
      "hotelName": "String",
      "hotelCity": "String",
      "hotelPrice": "String",
      "numReviews": "String",
      "roomAlbum": [
        {
          "user": "String",
          "userAvatarUrl": "String",
          "imageUrl": "String",
          "caption": "String",
          "category": "String",
          "datePosted": "String",
          "helpfulVotes": "Number",
          "location": "String",
          "contributions": "Number",
        },
      ],
      "diningAlbum": [
        {
          "user": "String",
          "userAvatarUrl": "String",
          "imageUrl": "String",
          "caption": "String",
          "category": "String",
          "datePosted": "String",
          "helpfulVotes": "Number",
          "location": "String",
          "contributions": "Number",
        },
      ],
      "poolAlbum": [
        {
          "user": "String",
          "userAvatarUrl": "String",
          "imageUrl": "String",
          "caption": "String",
          "category": "String",
          "datePosted": "String",
          "helpfulVotes": "Number",
          "location": "String",
          "contributions": "Number",
        },
      ],
      "gymAlbum": [
        {
          "user": "String",
          "userAvatarUrl": "String",
          "imageUrl": "String",
          "caption": "String",
          "category": "String",
          "datePosted": "String",
          "helpfulVotes": "Number",
          "location": "String",
          "contributions": "Number",
        },
      ],
      "amenitiesAlbum": [
        {
          "user": "String",
          "userAvatarUrl": "String",
          "imageUrl": "String",
          "caption": "String",
          "category": "String",
          "datePosted": "String",
          "helpfulVotes": "Number",
          "location": "String",
          "contributions": "Number",
        },
      ],
      "bathroomAlbum": [
        {
          "user": "String",
          "userAvatarUrl": "String",
          "imageUrl": "String",
          "caption": "String",
          "category": "String",
          "datePosted": "String",
          "helpfulVotes": "Number",
          "location": "String",
          "contributions": "Number",
        },
      ],
      "eventRoomAlbum": [
        {
          "user": "String",
          "userAvatarUrl": "String",
          "imageUrl": "String",
          "caption": "String",
          "category": "String",
          "datePosted": "String",
          "helpfulVotes": "Number",
          "location": "String",
          "contributions": "Number",
        },
      ],
      "roomViewAlbum": [
        {
          "user": "String",
          "userAvatarUrl": "String",
          "imageUrl": "String",
          "caption": "String",
          "category": "String",
          "datePosted": "String",
          "helpfulVotes": "Number",
          "location": "String",
          "contributions": "Number",
        },
      ],
    }
```

### Add hotel
  * POST `/api/photos/:hotelId`

**Success Status Code:** `201`

**Request Body**: Expects JSON with the following keys.

```json
    {
      "hotelId": "Number",
      "hotelName": "String",
      "hotelCity": "String",
      "hotelPrice": "String",
      "numReviews": "String",
      "roomAlbum": [
        {
          "user": "String",
          "userAvatarUrl": "String",
          "imageUrl": "String",
          "caption": "String",
          "category": "String",
          "datePosted": "String",
          "helpfulVotes": "Number",
          "location": "String",
          "contributions": "Number",
        },
      ],
      "diningAlbum": [
        {
          "user": "String",
          "userAvatarUrl": "String",
          "imageUrl": "String",
          "caption": "String",
          "category": "String",
          "datePosted": "String",
          "helpfulVotes": "Number",
          "location": "String",
          "contributions": "Number",
        },
      ],
      "poolAlbum": [
        {
          "user": "String",
          "userAvatarUrl": "String",
          "imageUrl": "String",
          "caption": "String",
          "category": "String",
          "datePosted": "String",
          "helpfulVotes": "Number",
          "location": "String",
          "contributions": "Number",
        },
      ],
      "gymAlbum": [
        {
          "user": "String",
          "userAvatarUrl": "String",
          "imageUrl": "String",
          "caption": "String",
          "category": "String",
          "datePosted": "String",
          "helpfulVotes": "Number",
          "location": "String",
          "contributions": "Number",
        },
      ],
      "amenitiesAlbum": [
        {
          "user": "String",
          "userAvatarUrl": "String",
          "imageUrl": "String",
          "caption": "String",
          "category": "String",
          "datePosted": "String",
          "helpfulVotes": "Number",
          "location": "String",
          "contributions": "Number",
        },
      ],
      "bathroomAlbum": [
        {
          "user": "String",
          "userAvatarUrl": "String",
          "imageUrl": "String",
          "caption": "String",
          "category": "String",
          "datePosted": "String",
          "helpfulVotes": "Number",
          "location": "String",
          "contributions": "Number",
        },
      ],
      "eventRoomAlbum": [
        {
          "user": "String",
          "userAvatarUrl": "String",
          "imageUrl": "String",
          "caption": "String",
          "category": "String",
          "datePosted": "String",
          "helpfulVotes": "Number",
          "location": "String",
          "contributions": "Number",
        },
      ],
      "roomViewAlbum": [
        {
          "user": "String",
          "userAvatarUrl": "String",
          "imageUrl": "String",
          "caption": "String",
          "category": "String",
          "datePosted": "String",
          "helpfulVotes": "Number",
          "location": "String",
          "contributions": "Number",
        },
      ],
    }
```

### Update hotel info
  * PUT `/api/photos/:hotelId'`

**Path Parameters:**
  * `hotelId` hotel id

**Success Status Code:** `204`

**Request Body**: Expects JSON with any of the following keys (include only keys to be updated)

```json
    {
      "hotelId": "Number",
      "hotelName": "String",
      "hotelCity": "String",
      "hotelPrice": "String",
      "numReviews": "String",
      "roomAlbum": [
        {
          "user": "String",
          "userAvatarUrl": "String",
          "imageUrl": "String",
          "caption": "String",
          "category": "String",
          "datePosted": "String",
          "helpfulVotes": "Number",
          "location": "String",
          "contributions": "Number",
        },
      ],
      "diningAlbum": [
        {
          "user": "String",
          "userAvatarUrl": "String",
          "imageUrl": "String",
          "caption": "String",
          "category": "String",
          "datePosted": "String",
          "helpfulVotes": "Number",
          "location": "String",
          "contributions": "Number",
        },
      ],
      "poolAlbum": [
        {
          "user": "String",
          "userAvatarUrl": "String",
          "imageUrl": "String",
          "caption": "String",
          "category": "String",
          "datePosted": "String",
          "helpfulVotes": "Number",
          "location": "String",
          "contributions": "Number",
        },
      ],
      "gymAlbum": [
        {
          "user": "String",
          "userAvatarUrl": "String",
          "imageUrl": "String",
          "caption": "String",
          "category": "String",
          "datePosted": "String",
          "helpfulVotes": "Number",
          "location": "String",
          "contributions": "Number",
        },
      ],
      "amenitiesAlbum": [
        {
          "user": "String",
          "userAvatarUrl": "String",
          "imageUrl": "String",
          "caption": "String",
          "category": "String",
          "datePosted": "String",
          "helpfulVotes": "Number",
          "location": "String",
          "contributions": "Number",
        },
      ],
      "bathroomAlbum": [
        {
          "user": "String",
          "userAvatarUrl": "String",
          "imageUrl": "String",
          "caption": "String",
          "category": "String",
          "datePosted": "String",
          "helpfulVotes": "Number",
          "location": "String",
          "contributions": "Number",
        },
      ],
      "eventRoomAlbum": [
        {
          "user": "String",
          "userAvatarUrl": "String",
          "imageUrl": "String",
          "caption": "String",
          "category": "String",
          "datePosted": "String",
          "helpfulVotes": "Number",
          "location": "String",
          "contributions": "Number",
        },
      ],
      "roomViewAlbum": [
        {
          "user": "String",
          "userAvatarUrl": "String",
          "imageUrl": "String",
          "caption": "String",
          "category": "String",
          "datePosted": "String",
          "helpfulVotes": "Number",
          "location": "String",
          "contributions": "Number",
        },
      ],
    }
```

### Delete hotel
  * DELETE `/api/photos/:hotelId`

**Path Parameters:**
  * `hotelId` hotel id

**Success Status Code:** `204`
