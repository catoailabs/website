/**
 * Renders a JSON-LD script tag from a schema object.
 * Use in page components: <JsonLd data={organizationSchema()} />
 */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
