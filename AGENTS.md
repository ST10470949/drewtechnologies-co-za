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

## Project rules
- Theme is a `.dark` class on <html> set by an inline head script reading localStorage `drew-theme` (fallback: OS preference) — prevents flash before hydration.
- Site-wide contact details and WhatsApp link builders live in `src/lib/site.ts`; content lists in `src/lib/content.ts` — single source so no page drifts.
- Project enquiries are delivered via a prefilled WhatsApp/email message (no backend) — never show success before the user sends.
