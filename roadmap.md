# Meme Engine homepage
- [x] Build phone-first homepage and compact four-bot section.
- [x] Connect real feed with rotation, refresh and honest error handling.
- [x] Verify four distinct Telegram bot destinations.
- [x] Test live content, failed refresh retention, and desktop/mobile layouts; actual iframe content verified on allowed production origin.
- [x] Add exact preview origin to local allowlist and tests; retain production origins and reject unrelated origins.
- [ ] Enable preview playback upstream: blocked because bot.plunderandriffle.com's frame-ancestors header excludes https://id-preview--017feecc-f869-423b-91eb-4489513f321b.lovable.app and its configuration is outside this project. Add that exact origin alongside existing production entries, then update upstreamPermitsEmbed's verified policy.