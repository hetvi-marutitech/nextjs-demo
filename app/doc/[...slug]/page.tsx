export default async function DocPage({
  params,
}: {params: Promise<{ slug: string[] }>}) { 
    const { slug } = await params;

    return (
        <main>
            <h1>Doc</h1>
            <p>{slug.join(" / ")}</p>
        </main>
    );
}