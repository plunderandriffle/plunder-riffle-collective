<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep the marketing site as a single-page TanStack route with a dedicated live-showcase component; this keeps navigation simple and separates polling from presentation.
- Fetch the public showcase directly in the browser and preserve its server ordering; CORS is explicitly public and no credentials are required.
- Embed only on explicitly permitted origins and show direct original-creation links elsewhere; the upstream frame-ancestors policy cannot be changed by this frontend.
