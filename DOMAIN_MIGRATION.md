# Domain migration plan

## Current state

- `rumeetgoradia.com` is currently registered at `Name.com`.
- Current nameservers are `ns1.vercel-dns.com` and `ns2.vercel-dns.com`.
- Transfer lock is enabled.
- Target setup:
  - Porkbun for domain registration
  - Cloudflare for DNS and hosting

## Domains

- Transfer `rumeetgoradia.com` to Porkbun later.
- Buy `rumeet.me` on Porkbun.
- Keep `.com` as primary until the new site is live, then decide whether `.me` becomes primary or just redirects.

## Safe migration order

The main rule: prepare DNS before changing registrar or nameservers.

1. Buy `rumeet.me` on Porkbun.
2. Add both domains to Cloudflare.
3. Let Cloudflare import existing DNS for `rumeetgoradia.com`.
4. Manually verify all needed records:
   - website records
   - email records
   - TXT verification records
   - redirects/subdomains
5. Keep the existing setup running until Cloudflare DNS is fully ready.
6. When ready, move nameservers from Vercel DNS to Cloudflare.
7. After DNS is stable, transfer `rumeetgoradia.com` from Name.com to Porkbun.

## Later checklist for transferring `rumeetgoradia.com`

At Name.com:

1. Confirm the registrant email is one you control.
2. Disable transfer lock.
3. Request the auth/EPP code.

At Porkbun:

1. Start a domain transfer for `rumeetgoradia.com`.
2. Enter the auth/EPP code.
3. Approve any transfer confirmation emails.
4. Wait for the transfer to complete.

After transfer completes:

1. Confirm Porkbun is now the registrar.
2. Confirm nameservers still point to Cloudflare.
3. Re-enable transfer lock.
4. Turn on auto-renew.

## Notes

- A registrar transfer does not need to change DNS.
- The risky part is changing nameservers before the new DNS zone is complete.
- If email is attached to the domain, double-check MX, SPF, DKIM, and DMARC before any DNS cutover.
- Delay canonical-domain decisions until the rewritten site is live.
