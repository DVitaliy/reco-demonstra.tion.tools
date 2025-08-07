export default {
  recoApi: {
    input: "./openapi/openapi.yaml",
    output: {
      mode: "tags-split",
      target: "./src/shared/api/generated.ts",
      client: "react-query",
      baseUrl: "https://8feea1f7d131.ngrok-free.app",
    },
  },
}
