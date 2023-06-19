# APIドキュメント

## リソース

---

### 観光スポット

<details>
 <summary><code>GET</code> <code><b>/api/v1/spots</b></code> <code>(観光スポット一覧の取得)</code></summary>

#### パラメータ

> | name       | type   | description                                    |
> |------------|--------|------------------------------------------------|
> | `page`     | option | ページ番号、デフォルトは1                      |
> | `category` | option | カテゴリー、デフォルトはなし、値はCategory参照 |

#### レスポンス

```json
{
  "spots": Spot[]
}
```

</details>

<details>
 <summary><code>GET</code> <code><b>/api/v1/spots/{spot_id}</b></code> <code>(観光スポット詳細の取得)</code></summary>

#### パラメータ

> | name      | type    | description    |
> |-----------|---------|----------------|
> | `spot_id` | require | 観光スポットID |

#### レスポンス

```json
{
  "spot": Spot
}
```

</details>

---

### オリジナルコース・モデルコース

<details>
 <summary><code>GET</code> <code><b>/api/v1/courses/models</b></code> <code>(モデルコース一覧の取得)</code></summary>

 #### パラメータ

> | name       | type   | description               |
> |------------|--------|---------------------------|
> | `page`     | option | ページ番号、デフォルトは1 |

#### レスポンス

```json
{
  "courses": Course[]
}
```

</details>

<details>
 <summary><code>GET</code> <code><b>/api/v1/courses/models/{model_id}</b></code> <code>(モデルコース詳細の取得)</code></summary>

 #### パラメータ

> | name       | type    | description    |
> |------------|---------|----------------|
> | `model_id` | require | モデルコースID |

#### レスポンス

```json
{
  "course": Course
}
```

</details>

## ドキュメント

### Spot

```json
{
  "id": "string",
  "category": Category,
  "name": "string",
  "description": "string",
  "photo": "string",
  "geometry": {
    "location": {
      "lat": "number",
      "lng": "number"
    }
  },
}
```

### Category

```

```

### Course

```json
{
  "id": "string",
  "route": Spot[],
}
```
