## Cómo documentar bodys de petición

```js{*}{maxHeight:'400px'}
/**
 * @swagger
 * /register:
 *  post:
 *      summary: Register a new customer
 *      tags: [auth]
 *      requestBody:
 *         required: true
 *         description: Body of request
 *         content:
 *          application/json:
 *              schema:
 *                  type: object
 *                  properties:
 *                      email:
 *                          type: string
 *                          format: email
 *                          description: User email
 *                      password:
 *                          type: string
 *                          description: User password
 *                          required: true
 *                  required:
 *                      - email
 *                      - password
 */

```