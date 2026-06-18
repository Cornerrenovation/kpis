window.KPI_DATA = {
  "as_of": "2026-06-18T22:10:38+00:00",
  "as_of_human": "2026-06-18 22:10 UTC",
  "refresh_window_hours": 168,
  "scope": "public",
  "sources": {
    "repo": "live",
    "slack": "live",
    "gmail": "live"
  },
  "default_period": "2026-06",
  "periods": [
    {
      "key": "rolling",
      "label": "Last 30 days",
      "kind": "rolling",
      "start": "2026-05-19",
      "end": "2026-06-18",
      "funnel": {
        "stages": [
          {
            "key": "booked",
            "label": "Discovery booked",
            "value": 19
          },
          {
            "key": "discovery",
            "label": "Discovery made",
            "value": 16
          },
          {
            "key": "proposal",
            "label": "Proposals made",
            "value": 11
          },
          {
            "key": "deposit",
            "label": "$500 paid",
            "value": 6
          }
        ]
      },
      "dashboards": [
        {
          "id": "team",
          "title": "Team \u2014 all designers",
          "owner": "Agustina \u00b7 Suelen \u00b7 Bruna \u00b7 La\u00eds",
          "metrics": [
            {
              "label": "Discovery booked",
              "value": 19,
              "unit": "leads",
              "source": "Slack #new-lead-workflow (Assignee, booking date)",
              "status": "live",
              "customers": [],
              "double_check": null,
              "note": null,
              "secondary": null
            },
            {
              "label": "Discovery calls conducted",
              "value": 16,
              "unit": "calls",
              "source": "First-call recordings (repo), by call date",
              "status": "live",
              "customers": [],
              "double_check": null,
              "note": null,
              "secondary": null
            },
            {
              "label": "Proposal calls conducted",
              "value": 11,
              "unit": "calls",
              "source": "Proposal-call recordings (repo), by call date",
              "status": "live",
              "customers": [],
              "double_check": null,
              "note": null,
              "secondary": null
            },
            {
              "label": "Design sessions conducted",
              "value": 16,
              "unit": "sessions",
              "source": "Fathom \u00b7 paid + designer-owned clients (by meeting date)",
              "status": "snapshot",
              "customers": [],
              "double_check": null,
              "note": null,
              "secondary": null
            },
            {
              "label": "$500 deposits",
              "value": 6,
              "unit": "deposits",
              "source": "Designer Gmail (payment date) \u00b7 current owner",
              "status": "live",
              "customers": [],
              "double_check": null,
              "note": null,
              "secondary": null
            },
            {
              "label": "10% payments",
              "value": 1,
              "unit": "payments",
              "source": "Designer Gmail (10% order payment) \u00b7 current owner",
              "status": "snapshot",
              "customers": [],
              "double_check": null,
              "note": null,
              "secondary": null
            },
            {
              "label": "Active in design (pre-10%)",
              "value": 8,
              "unit": "customers",
              "source": "Design roster \u00b7 paid $500, not yet 10% \u00b7 current owner",
              "status": "snapshot",
              "customers": [],
              "double_check": null,
              "note": null,
              "secondary": null
            },
            {
              "label": "Avg discovery \u2192 proposal",
              "value": 11,
              "unit": "days",
              "source": "Repo transcript dates \u00b7 discovery \u2192 proposal",
              "status": "live",
              "customers": [],
              "double_check": null,
              "note": null,
              "secondary": null
            },
            {
              "label": "Avg proposal \u2192 $500",
              "value": 25,
              "unit": "days",
              "source": "Repo proposal date \u2192 deposit date",
              "status": "live",
              "customers": [],
              "double_check": null,
              "note": null,
              "secondary": null
            },
            {
              "label": "Avg $500 \u2192 10%",
              "value": 40,
              "unit": "days",
              "source": "Deposit date \u2192 10% payment date",
              "status": "live",
              "customers": [],
              "double_check": null,
              "note": null,
              "secondary": null
            }
          ]
        },
        {
          "id": "agustina",
          "title": "Agustina",
          "owner": "full funnel",
          "metrics": [
            {
              "label": "Discovery booked",
              "value": 3,
              "unit": "leads",
              "source": "Slack #new-lead-workflow (Assignee, booking date)",
              "status": "live",
              "customers": [],
              "double_check": null,
              "note": null,
              "secondary": null
            },
            {
              "label": "Discovery calls conducted",
              "value": 3,
              "unit": "calls",
              "source": "First-call recordings (repo), by call date",
              "status": "live",
              "customers": [],
              "double_check": null,
              "note": null,
              "secondary": null
            },
            {
              "label": "Proposal calls conducted",
              "value": 2,
              "unit": "calls",
              "source": "Proposal-call recordings (repo), by call date",
              "status": "live",
              "customers": [],
              "double_check": null,
              "note": null,
              "secondary": null
            },
            {
              "label": "Design sessions conducted",
              "value": 3,
              "unit": "sessions",
              "source": "Fathom \u00b7 paid + designer-owned clients (by meeting date)",
              "status": "snapshot",
              "customers": [],
              "double_check": null,
              "note": null,
              "secondary": null
            },
            {
              "label": "$500 deposits",
              "value": 2,
              "unit": "deposits",
              "source": "Designer Gmail (payment date) \u00b7 current owner",
              "status": "live",
              "customers": [],
              "double_check": null,
              "note": null,
              "secondary": null
            },
            {
              "label": "10% payments",
              "value": 0,
              "unit": "payments",
              "source": "Designer Gmail (10% order payment) \u00b7 current owner",
              "status": "snapshot",
              "customers": [],
              "double_check": null,
              "note": null,
              "secondary": null
            },
            {
              "label": "Active in design (pre-10%)",
              "value": 2,
              "unit": "customers",
              "source": "Design roster \u00b7 paid $500, not yet 10% \u00b7 current owner",
              "status": "snapshot",
              "customers": [],
              "double_check": null,
              "note": null,
              "secondary": null
            },
            {
              "label": "Avg discovery \u2192 proposal",
              "value": 6,
              "unit": "days",
              "source": "Repo transcript dates \u00b7 discovery \u2192 proposal",
              "status": "live",
              "customers": [],
              "double_check": null,
              "note": null,
              "secondary": null
            },
            {
              "label": "Avg proposal \u2192 $500",
              "value": 32,
              "unit": "days",
              "source": "Repo proposal date \u2192 deposit date",
              "status": "live",
              "customers": [],
              "double_check": null,
              "note": null,
              "secondary": null
            },
            {
              "label": "Avg $500 \u2192 10%",
              "value": null,
              "unit": "days",
              "source": "Deposit date \u2192 10% payment date",
              "status": "live",
              "customers": [],
              "double_check": null,
              "note": null,
              "secondary": null
            }
          ]
        },
        {
          "id": "suelen",
          "title": "Suelen",
          "owner": "full funnel",
          "metrics": [
            {
              "label": "Discovery booked",
              "value": 7,
              "unit": "leads",
              "source": "Slack #new-lead-workflow (Assignee, booking date)",
              "status": "live",
              "customers": [],
              "double_check": null,
              "note": null,
              "secondary": null
            },
            {
              "label": "Discovery calls conducted",
              "value": 7,
              "unit": "calls",
              "source": "First-call recordings (repo), by call date",
              "status": "live",
              "customers": [],
              "double_check": null,
              "note": null,
              "secondary": null
            },
            {
              "label": "Proposal calls conducted",
              "value": 5,
              "unit": "calls",
              "source": "Proposal-call recordings (repo), by call date",
              "status": "live",
              "customers": [],
              "double_check": null,
              "note": null,
              "secondary": null
            },
            {
              "label": "Design sessions conducted",
              "value": 2,
              "unit": "sessions",
              "source": "Fathom \u00b7 paid + designer-owned clients (by meeting date)",
              "status": "snapshot",
              "customers": [],
              "double_check": null,
              "note": null,
              "secondary": null
            },
            {
              "label": "$500 deposits",
              "value": 1,
              "unit": "deposits",
              "source": "Designer Gmail (payment date) \u00b7 current owner",
              "status": "live",
              "customers": [],
              "double_check": null,
              "note": null,
              "secondary": null
            },
            {
              "label": "10% payments",
              "value": 0,
              "unit": "payments",
              "source": "Designer Gmail (10% order payment) \u00b7 current owner",
              "status": "snapshot",
              "customers": [],
              "double_check": null,
              "note": null,
              "secondary": null
            },
            {
              "label": "Active in design (pre-10%)",
              "value": 1,
              "unit": "customers",
              "source": "Design roster \u00b7 paid $500, not yet 10% \u00b7 current owner",
              "status": "snapshot",
              "customers": [],
              "double_check": null,
              "note": null,
              "secondary": null
            },
            {
              "label": "Avg discovery \u2192 proposal",
              "value": 11,
              "unit": "days",
              "source": "Repo transcript dates \u00b7 discovery \u2192 proposal",
              "status": "live",
              "customers": [],
              "double_check": null,
              "note": null,
              "secondary": null
            },
            {
              "label": "Avg proposal \u2192 $500",
              "value": 46,
              "unit": "days",
              "source": "Repo proposal date \u2192 deposit date",
              "status": "live",
              "customers": [],
              "double_check": null,
              "note": null,
              "secondary": null
            },
            {
              "label": "Avg $500 \u2192 10%",
              "value": null,
              "unit": "days",
              "source": "Deposit date \u2192 10% payment date",
              "status": "live",
              "customers": [],
              "double_check": null,
              "note": null,
              "secondary": null
            }
          ]
        },
        {
          "id": "bruna",
          "title": "Bruna",
          "owner": "full funnel",
          "metrics": [
            {
              "label": "Discovery booked",
              "value": 4,
              "unit": "leads",
              "source": "Slack #new-lead-workflow (Assignee, booking date)",
              "status": "live",
              "customers": [],
              "double_check": null,
              "note": null,
              "secondary": null
            },
            {
              "label": "Discovery calls conducted",
              "value": 2,
              "unit": "calls",
              "source": "First-call recordings (repo), by call date",
              "status": "live",
              "customers": [],
              "double_check": null,
              "note": null,
              "secondary": null
            },
            {
              "label": "Proposal calls conducted",
              "value": 2,
              "unit": "calls",
              "source": "Proposal-call recordings (repo), by call date",
              "status": "live",
              "customers": [],
              "double_check": null,
              "note": null,
              "secondary": null
            },
            {
              "label": "Design sessions conducted",
              "value": 6,
              "unit": "sessions",
              "source": "Fathom \u00b7 paid + designer-owned clients (by meeting date)",
              "status": "snapshot",
              "customers": [],
              "double_check": null,
              "note": null,
              "secondary": null
            },
            {
              "label": "$500 deposits",
              "value": 1,
              "unit": "deposits",
              "source": "Designer Gmail (payment date) \u00b7 current owner",
              "status": "live",
              "customers": [],
              "double_check": null,
              "note": null,
              "secondary": null
            },
            {
              "label": "10% payments",
              "value": 0,
              "unit": "payments",
              "source": "Designer Gmail (10% order payment) \u00b7 current owner",
              "status": "snapshot",
              "customers": [],
              "double_check": null,
              "note": null,
              "secondary": null
            },
            {
              "label": "Active in design (pre-10%)",
              "value": 3,
              "unit": "customers",
              "source": "Design roster \u00b7 paid $500, not yet 10% \u00b7 current owner",
              "status": "snapshot",
              "customers": [],
              "double_check": null,
              "note": null,
              "secondary": null
            },
            {
              "label": "Avg discovery \u2192 proposal",
              "value": 19,
              "unit": "days",
              "source": "Repo transcript dates \u00b7 discovery \u2192 proposal",
              "status": "live",
              "customers": [],
              "double_check": null,
              "note": null,
              "secondary": null
            },
            {
              "label": "Avg proposal \u2192 $500",
              "value": 1,
              "unit": "days",
              "source": "Repo proposal date \u2192 deposit date",
              "status": "live",
              "customers": [],
              "double_check": null,
              "note": null,
              "secondary": null
            },
            {
              "label": "Avg $500 \u2192 10%",
              "value": null,
              "unit": "days",
              "source": "Deposit date \u2192 10% payment date",
              "status": "live",
              "customers": [],
              "double_check": null,
              "note": null,
              "secondary": null
            }
          ]
        },
        {
          "id": "lais",
          "title": "La\u00eds",
          "owner": "full funnel",
          "metrics": [
            {
              "label": "Discovery booked",
              "value": 5,
              "unit": "leads",
              "source": "Slack #new-lead-workflow (Assignee, booking date)",
              "status": "live",
              "customers": [],
              "double_check": null,
              "note": null,
              "secondary": null
            },
            {
              "label": "Discovery calls conducted",
              "value": 4,
              "unit": "calls",
              "source": "First-call recordings (repo), by call date",
              "status": "live",
              "customers": [],
              "double_check": null,
              "note": null,
              "secondary": null
            },
            {
              "label": "Proposal calls conducted",
              "value": 2,
              "unit": "calls",
              "source": "Proposal-call recordings (repo), by call date",
              "status": "live",
              "customers": [],
              "double_check": null,
              "note": null,
              "secondary": null
            },
            {
              "label": "Design sessions conducted",
              "value": 5,
              "unit": "sessions",
              "source": "Fathom \u00b7 paid + designer-owned clients (by meeting date)",
              "status": "snapshot",
              "customers": [],
              "double_check": null,
              "note": null,
              "secondary": null
            },
            {
              "label": "$500 deposits",
              "value": 2,
              "unit": "deposits",
              "source": "Designer Gmail (payment date) \u00b7 current owner",
              "status": "live",
              "customers": [],
              "double_check": null,
              "note": null,
              "secondary": null
            },
            {
              "label": "10% payments",
              "value": 1,
              "unit": "payments",
              "source": "Designer Gmail (10% order payment) \u00b7 current owner",
              "status": "snapshot",
              "customers": [],
              "double_check": null,
              "note": null,
              "secondary": null
            },
            {
              "label": "Active in design (pre-10%)",
              "value": 2,
              "unit": "customers",
              "source": "Design roster \u00b7 paid $500, not yet 10% \u00b7 current owner",
              "status": "snapshot",
              "customers": [],
              "double_check": null,
              "note": null,
              "secondary": null
            },
            {
              "label": "Avg discovery \u2192 proposal",
              "value": 9,
              "unit": "days",
              "source": "Repo transcript dates \u00b7 discovery \u2192 proposal",
              "status": "live",
              "customers": [],
              "double_check": null,
              "note": null,
              "secondary": null
            },
            {
              "label": "Avg proposal \u2192 $500",
              "value": 13,
              "unit": "days",
              "source": "Repo proposal date \u2192 deposit date",
              "status": "live",
              "customers": [],
              "double_check": null,
              "note": null,
              "secondary": null
            },
            {
              "label": "Avg $500 \u2192 10%",
              "value": 40,
              "unit": "days",
              "source": "Deposit date \u2192 10% payment date",
              "status": "live",
              "customers": [],
              "double_check": null,
              "note": null,
              "secondary": null
            }
          ]
        }
      ]
    },
    {
      "key": "2026-05",
      "label": "May 2026",
      "kind": "month",
      "start": "2026-05-01",
      "end": "2026-05-31",
      "funnel": {
        "stages": [
          {
            "key": "booked",
            "label": "Discovery booked",
            "value": 17
          },
          {
            "key": "discovery",
            "label": "Discovery made",
            "value": 20
          },
          {
            "key": "proposal",
            "label": "Proposals made",
            "value": 21
          },
          {
            "key": "deposit",
            "label": "$500 paid",
            "value": 3
          }
        ]
      },
      "dashboards": [
        {
          "id": "team",
          "title": "Team \u2014 all designers",
          "owner": "Agustina \u00b7 Suelen \u00b7 Bruna \u00b7 La\u00eds",
          "metrics": [
            {
              "label": "Discovery booked",
              "value": 17,
              "unit": "leads",
              "source": "Slack #new-lead-workflow (Assignee, booking date)",
              "status": "live",
              "customers": [],
              "double_check": null,
              "note": null,
              "secondary": null
            },
            {
              "label": "Discovery calls conducted",
              "value": 20,
              "unit": "calls",
              "source": "First-call recordings (repo), by call date",
              "status": "live",
              "customers": [],
              "double_check": null,
              "note": null,
              "secondary": null
            },
            {
              "label": "Proposal calls conducted",
              "value": 21,
              "unit": "calls",
              "source": "Proposal-call recordings (repo), by call date",
              "status": "live",
              "customers": [],
              "double_check": null,
              "note": null,
              "secondary": null
            },
            {
              "label": "Design sessions conducted",
              "value": 4,
              "unit": "sessions",
              "source": "Fathom \u00b7 paid + designer-owned clients (by meeting date)",
              "status": "snapshot",
              "customers": [],
              "double_check": null,
              "note": null,
              "secondary": null
            },
            {
              "label": "$500 deposits",
              "value": 3,
              "unit": "deposits",
              "source": "Designer Gmail (payment date) \u00b7 current owner",
              "status": "live",
              "customers": [],
              "double_check": null,
              "note": null,
              "secondary": null
            },
            {
              "label": "10% payments",
              "value": 0,
              "unit": "payments",
              "source": "Designer Gmail (10% order payment) \u00b7 current owner",
              "status": "snapshot",
              "customers": [],
              "double_check": null,
              "note": null,
              "secondary": null
            },
            {
              "label": "Active in design (pre-10%)",
              "value": 8,
              "unit": "customers",
              "source": "Design roster \u00b7 paid $500, not yet 10% \u00b7 current owner",
              "status": "snapshot",
              "customers": [],
              "double_check": null,
              "note": null,
              "secondary": null
            },
            {
              "label": "Avg discovery \u2192 proposal",
              "value": 9,
              "unit": "days",
              "source": "Repo transcript dates \u00b7 discovery \u2192 proposal",
              "status": "live",
              "customers": [],
              "double_check": null,
              "note": null,
              "secondary": null
            },
            {
              "label": "Avg proposal \u2192 $500",
              "value": 30,
              "unit": "days",
              "source": "Repo proposal date \u2192 deposit date",
              "status": "live",
              "customers": [],
              "double_check": null,
              "note": null,
              "secondary": null
            },
            {
              "label": "Avg $500 \u2192 10%",
              "value": null,
              "unit": "days",
              "source": "Deposit date \u2192 10% payment date",
              "status": "live",
              "customers": [],
              "double_check": null,
              "note": null,
              "secondary": null
            }
          ]
        },
        {
          "id": "agustina",
          "title": "Agustina",
          "owner": "full funnel",
          "metrics": [
            {
              "label": "Discovery booked",
              "value": 6,
              "unit": "leads",
              "source": "Slack #new-lead-workflow (Assignee, booking date)",
              "status": "live",
              "customers": [],
              "double_check": null,
              "note": null,
              "secondary": null
            },
            {
              "label": "Discovery calls conducted",
              "value": 6,
              "unit": "calls",
              "source": "First-call recordings (repo), by call date",
              "status": "live",
              "customers": [],
              "double_check": null,
              "note": null,
              "secondary": null
            },
            {
              "label": "Proposal calls conducted",
              "value": 6,
              "unit": "calls",
              "source": "Proposal-call recordings (repo), by call date",
              "status": "live",
              "customers": [],
              "double_check": null,
              "note": null,
              "secondary": null
            },
            {
              "label": "Design sessions conducted",
              "value": 0,
              "unit": "sessions",
              "source": "Fathom \u00b7 paid + designer-owned clients (by meeting date)",
              "status": "snapshot",
              "customers": [],
              "double_check": null,
              "note": null,
              "secondary": null
            },
            {
              "label": "$500 deposits",
              "value": 1,
              "unit": "deposits",
              "source": "Designer Gmail (payment date) \u00b7 current owner",
              "status": "live",
              "customers": [],
              "double_check": null,
              "note": null,
              "secondary": null
            },
            {
              "label": "10% payments",
              "value": 0,
              "unit": "payments",
              "source": "Designer Gmail (10% order payment) \u00b7 current owner",
              "status": "snapshot",
              "customers": [],
              "double_check": null,
              "note": null,
              "secondary": null
            },
            {
              "label": "Active in design (pre-10%)",
              "value": 2,
              "unit": "customers",
              "source": "Design roster \u00b7 paid $500, not yet 10% \u00b7 current owner",
              "status": "snapshot",
              "customers": [],
              "double_check": null,
              "note": null,
              "secondary": null
            },
            {
              "label": "Avg discovery \u2192 proposal",
              "value": 8,
              "unit": "days",
              "source": "Repo transcript dates \u00b7 discovery \u2192 proposal",
              "status": "live",
              "customers": [],
              "double_check": null,
              "note": null,
              "secondary": null
            },
            {
              "label": "Avg proposal \u2192 $500",
              "value": 43,
              "unit": "days",
              "source": "Repo proposal date \u2192 deposit date",
              "status": "live",
              "customers": [],
              "double_check": null,
              "note": null,
              "secondary": null
            },
            {
              "label": "Avg $500 \u2192 10%",
              "value": null,
              "unit": "days",
              "source": "Deposit date \u2192 10% payment date",
              "status": "live",
              "customers": [],
              "double_check": null,
              "note": null,
              "secondary": null
            }
          ]
        },
        {
          "id": "suelen",
          "title": "Suelen",
          "owner": "full funnel",
          "metrics": [
            {
              "label": "Discovery booked",
              "value": 2,
              "unit": "leads",
              "source": "Slack #new-lead-workflow (Assignee, booking date)",
              "status": "live",
              "customers": [],
              "double_check": null,
              "note": null,
              "secondary": null
            },
            {
              "label": "Discovery calls conducted",
              "value": 5,
              "unit": "calls",
              "source": "First-call recordings (repo), by call date",
              "status": "live",
              "customers": [],
              "double_check": null,
              "note": null,
              "secondary": null
            },
            {
              "label": "Proposal calls conducted",
              "value": 4,
              "unit": "calls",
              "source": "Proposal-call recordings (repo), by call date",
              "status": "live",
              "customers": [],
              "double_check": null,
              "note": null,
              "secondary": null
            },
            {
              "label": "Design sessions conducted",
              "value": 0,
              "unit": "sessions",
              "source": "Fathom \u00b7 paid + designer-owned clients (by meeting date)",
              "status": "snapshot",
              "customers": [],
              "double_check": null,
              "note": null,
              "secondary": null
            },
            {
              "label": "$500 deposits",
              "value": 1,
              "unit": "deposits",
              "source": "Designer Gmail (payment date) \u00b7 current owner",
              "status": "live",
              "customers": [],
              "double_check": null,
              "note": null,
              "secondary": null
            },
            {
              "label": "10% payments",
              "value": 0,
              "unit": "payments",
              "source": "Designer Gmail (10% order payment) \u00b7 current owner",
              "status": "snapshot",
              "customers": [],
              "double_check": null,
              "note": null,
              "secondary": null
            },
            {
              "label": "Active in design (pre-10%)",
              "value": 1,
              "unit": "customers",
              "source": "Design roster \u00b7 paid $500, not yet 10% \u00b7 current owner",
              "status": "snapshot",
              "customers": [],
              "double_check": null,
              "note": null,
              "secondary": null
            },
            {
              "label": "Avg discovery \u2192 proposal",
              "value": 10,
              "unit": "days",
              "source": "Repo transcript dates \u00b7 discovery \u2192 proposal",
              "status": "live",
              "customers": [],
              "double_check": null,
              "note": null,
              "secondary": null
            },
            {
              "label": "Avg proposal \u2192 $500",
              "value": 46,
              "unit": "days",
              "source": "Repo proposal date \u2192 deposit date",
              "status": "live",
              "customers": [],
              "double_check": null,
              "note": null,
              "secondary": null
            },
            {
              "label": "Avg $500 \u2192 10%",
              "value": null,
              "unit": "days",
              "source": "Deposit date \u2192 10% payment date",
              "status": "live",
              "customers": [],
              "double_check": null,
              "note": null,
              "secondary": null
            }
          ]
        },
        {
          "id": "bruna",
          "title": "Bruna",
          "owner": "full funnel",
          "metrics": [
            {
              "label": "Discovery booked",
              "value": 3,
              "unit": "leads",
              "source": "Slack #new-lead-workflow (Assignee, booking date)",
              "status": "live",
              "customers": [],
              "double_check": null,
              "note": null,
              "secondary": null
            },
            {
              "label": "Discovery calls conducted",
              "value": 4,
              "unit": "calls",
              "source": "First-call recordings (repo), by call date",
              "status": "live",
              "customers": [],
              "double_check": null,
              "note": null,
              "secondary": null
            },
            {
              "label": "Proposal calls conducted",
              "value": 6,
              "unit": "calls",
              "source": "Proposal-call recordings (repo), by call date",
              "status": "live",
              "customers": [],
              "double_check": null,
              "note": null,
              "secondary": null
            },
            {
              "label": "Design sessions conducted",
              "value": 2,
              "unit": "sessions",
              "source": "Fathom \u00b7 paid + designer-owned clients (by meeting date)",
              "status": "snapshot",
              "customers": [],
              "double_check": null,
              "note": null,
              "secondary": null
            },
            {
              "label": "$500 deposits",
              "value": 1,
              "unit": "deposits",
              "source": "Designer Gmail (payment date) \u00b7 current owner",
              "status": "live",
              "customers": [],
              "double_check": null,
              "note": null,
              "secondary": null
            },
            {
              "label": "10% payments",
              "value": 0,
              "unit": "payments",
              "source": "Designer Gmail (10% order payment) \u00b7 current owner",
              "status": "snapshot",
              "customers": [],
              "double_check": null,
              "note": null,
              "secondary": null
            },
            {
              "label": "Active in design (pre-10%)",
              "value": 3,
              "unit": "customers",
              "source": "Design roster \u00b7 paid $500, not yet 10% \u00b7 current owner",
              "status": "snapshot",
              "customers": [],
              "double_check": null,
              "note": null,
              "secondary": null
            },
            {
              "label": "Avg discovery \u2192 proposal",
              "value": 11,
              "unit": "days",
              "source": "Repo transcript dates \u00b7 discovery \u2192 proposal",
              "status": "live",
              "customers": [],
              "double_check": null,
              "note": null,
              "secondary": null
            },
            {
              "label": "Avg proposal \u2192 $500",
              "value": 1,
              "unit": "days",
              "source": "Repo proposal date \u2192 deposit date",
              "status": "live",
              "customers": [],
              "double_check": null,
              "note": null,
              "secondary": null
            },
            {
              "label": "Avg $500 \u2192 10%",
              "value": null,
              "unit": "days",
              "source": "Deposit date \u2192 10% payment date",
              "status": "live",
              "customers": [],
              "double_check": null,
              "note": null,
              "secondary": null
            }
          ]
        },
        {
          "id": "lais",
          "title": "La\u00eds",
          "owner": "full funnel",
          "metrics": [
            {
              "label": "Discovery booked",
              "value": 6,
              "unit": "leads",
              "source": "Slack #new-lead-workflow (Assignee, booking date)",
              "status": "live",
              "customers": [],
              "double_check": null,
              "note": null,
              "secondary": null
            },
            {
              "label": "Discovery calls conducted",
              "value": 5,
              "unit": "calls",
              "source": "First-call recordings (repo), by call date",
              "status": "live",
              "customers": [],
              "double_check": null,
              "note": null,
              "secondary": null
            },
            {
              "label": "Proposal calls conducted",
              "value": 5,
              "unit": "calls",
              "source": "Proposal-call recordings (repo), by call date",
              "status": "live",
              "customers": [],
              "double_check": null,
              "note": null,
              "secondary": null
            },
            {
              "label": "Design sessions conducted",
              "value": 2,
              "unit": "sessions",
              "source": "Fathom \u00b7 paid + designer-owned clients (by meeting date)",
              "status": "snapshot",
              "customers": [],
              "double_check": null,
              "note": null,
              "secondary": null
            },
            {
              "label": "$500 deposits",
              "value": 0,
              "unit": "deposits",
              "source": "Designer Gmail (payment date) \u00b7 current owner",
              "status": "live",
              "customers": [],
              "double_check": null,
              "note": null,
              "secondary": null
            },
            {
              "label": "10% payments",
              "value": 0,
              "unit": "payments",
              "source": "Designer Gmail (10% order payment) \u00b7 current owner",
              "status": "snapshot",
              "customers": [],
              "double_check": null,
              "note": null,
              "secondary": null
            },
            {
              "label": "Active in design (pre-10%)",
              "value": 2,
              "unit": "customers",
              "source": "Design roster \u00b7 paid $500, not yet 10% \u00b7 current owner",
              "status": "snapshot",
              "customers": [],
              "double_check": null,
              "note": null,
              "secondary": null
            },
            {
              "label": "Avg discovery \u2192 proposal",
              "value": 9,
              "unit": "days",
              "source": "Repo transcript dates \u00b7 discovery \u2192 proposal",
              "status": "live",
              "customers": [],
              "double_check": null,
              "note": null,
              "secondary": null
            },
            {
              "label": "Avg proposal \u2192 $500",
              "value": null,
              "unit": "days",
              "source": "Repo proposal date \u2192 deposit date",
              "status": "live",
              "customers": [],
              "double_check": null,
              "note": null,
              "secondary": null
            },
            {
              "label": "Avg $500 \u2192 10%",
              "value": null,
              "unit": "days",
              "source": "Deposit date \u2192 10% payment date",
              "status": "live",
              "customers": [],
              "double_check": null,
              "note": null,
              "secondary": null
            }
          ]
        }
      ]
    },
    {
      "key": "2026-06",
      "label": "Jun 2026",
      "kind": "month",
      "start": "2026-06-01",
      "end": "2026-06-18",
      "funnel": {
        "stages": [
          {
            "key": "booked",
            "label": "Discovery booked",
            "value": 16
          },
          {
            "key": "discovery",
            "label": "Discovery made",
            "value": 12
          },
          {
            "key": "proposal",
            "label": "Proposals made",
            "value": 6
          },
          {
            "key": "deposit",
            "label": "$500 paid",
            "value": 3
          }
        ]
      },
      "dashboards": [
        {
          "id": "team",
          "title": "Team \u2014 all designers",
          "owner": "Agustina \u00b7 Suelen \u00b7 Bruna \u00b7 La\u00eds",
          "metrics": [
            {
              "label": "Discovery booked",
              "value": 16,
              "unit": "leads",
              "source": "Slack #new-lead-workflow (Assignee, booking date)",
              "status": "live",
              "customers": [],
              "double_check": null,
              "note": null,
              "secondary": null
            },
            {
              "label": "Discovery calls conducted",
              "value": 12,
              "unit": "calls",
              "source": "First-call recordings (repo), by call date",
              "status": "live",
              "customers": [],
              "double_check": null,
              "note": null,
              "secondary": null
            },
            {
              "label": "Proposal calls conducted",
              "value": 6,
              "unit": "calls",
              "source": "Proposal-call recordings (repo), by call date",
              "status": "live",
              "customers": [],
              "double_check": null,
              "note": null,
              "secondary": null
            },
            {
              "label": "Design sessions conducted",
              "value": 12,
              "unit": "sessions",
              "source": "Fathom \u00b7 paid + designer-owned clients (by meeting date)",
              "status": "snapshot",
              "customers": [],
              "double_check": null,
              "note": null,
              "secondary": null
            },
            {
              "label": "$500 deposits",
              "value": 3,
              "unit": "deposits",
              "source": "Designer Gmail (payment date) \u00b7 current owner",
              "status": "live",
              "customers": [],
              "double_check": null,
              "note": null,
              "secondary": null
            },
            {
              "label": "10% payments",
              "value": 1,
              "unit": "payments",
              "source": "Designer Gmail (10% order payment) \u00b7 current owner",
              "status": "snapshot",
              "customers": [],
              "double_check": null,
              "note": null,
              "secondary": null
            },
            {
              "label": "Active in design (pre-10%)",
              "value": 8,
              "unit": "customers",
              "source": "Design roster \u00b7 paid $500, not yet 10% \u00b7 current owner",
              "status": "snapshot",
              "customers": [],
              "double_check": null,
              "note": null,
              "secondary": null
            },
            {
              "label": "Avg discovery \u2192 proposal",
              "value": 14,
              "unit": "days",
              "source": "Repo transcript dates \u00b7 discovery \u2192 proposal",
              "status": "live",
              "customers": [],
              "double_check": null,
              "note": null,
              "secondary": null
            },
            {
              "label": "Avg proposal \u2192 $500",
              "value": 17,
              "unit": "days",
              "source": "Repo proposal date \u2192 deposit date",
              "status": "live",
              "customers": [],
              "double_check": null,
              "note": null,
              "secondary": null
            },
            {
              "label": "Avg $500 \u2192 10%",
              "value": 40,
              "unit": "days",
              "source": "Deposit date \u2192 10% payment date",
              "status": "live",
              "customers": [],
              "double_check": null,
              "note": null,
              "secondary": null
            }
          ]
        },
        {
          "id": "agustina",
          "title": "Agustina",
          "owner": "full funnel",
          "metrics": [
            {
              "label": "Discovery booked",
              "value": 3,
              "unit": "leads",
              "source": "Slack #new-lead-workflow (Assignee, booking date)",
              "status": "live",
              "customers": [],
              "double_check": null,
              "note": null,
              "secondary": null
            },
            {
              "label": "Discovery calls conducted",
              "value": 3,
              "unit": "calls",
              "source": "First-call recordings (repo), by call date",
              "status": "live",
              "customers": [],
              "double_check": null,
              "note": null,
              "secondary": null
            },
            {
              "label": "Proposal calls conducted",
              "value": 1,
              "unit": "calls",
              "source": "Proposal-call recordings (repo), by call date",
              "status": "live",
              "customers": [],
              "double_check": null,
              "note": null,
              "secondary": null
            },
            {
              "label": "Design sessions conducted",
              "value": 3,
              "unit": "sessions",
              "source": "Fathom \u00b7 paid + designer-owned clients (by meeting date)",
              "status": "snapshot",
              "customers": [],
              "double_check": null,
              "note": null,
              "secondary": null
            },
            {
              "label": "$500 deposits",
              "value": 1,
              "unit": "deposits",
              "source": "Designer Gmail (payment date) \u00b7 current owner",
              "status": "live",
              "customers": [],
              "double_check": null,
              "note": null,
              "secondary": null
            },
            {
              "label": "10% payments",
              "value": 0,
              "unit": "payments",
              "source": "Designer Gmail (10% order payment) \u00b7 current owner",
              "status": "snapshot",
              "customers": [],
              "double_check": null,
              "note": null,
              "secondary": null
            },
            {
              "label": "Active in design (pre-10%)",
              "value": 2,
              "unit": "customers",
              "source": "Design roster \u00b7 paid $500, not yet 10% \u00b7 current owner",
              "status": "snapshot",
              "customers": [],
              "double_check": null,
              "note": null,
              "secondary": null
            },
            {
              "label": "Avg discovery \u2192 proposal",
              "value": 7,
              "unit": "days",
              "source": "Repo transcript dates \u00b7 discovery \u2192 proposal",
              "status": "live",
              "customers": [],
              "double_check": null,
              "note": null,
              "secondary": null
            },
            {
              "label": "Avg proposal \u2192 $500",
              "value": 21,
              "unit": "days",
              "source": "Repo proposal date \u2192 deposit date",
              "status": "live",
              "customers": [],
              "double_check": null,
              "note": null,
              "secondary": null
            },
            {
              "label": "Avg $500 \u2192 10%",
              "value": null,
              "unit": "days",
              "source": "Deposit date \u2192 10% payment date",
              "status": "live",
              "customers": [],
              "double_check": null,
              "note": null,
              "secondary": null
            }
          ]
        },
        {
          "id": "suelen",
          "title": "Suelen",
          "owner": "full funnel",
          "metrics": [
            {
              "label": "Discovery booked",
              "value": 6,
              "unit": "leads",
              "source": "Slack #new-lead-workflow (Assignee, booking date)",
              "status": "live",
              "customers": [],
              "double_check": null,
              "note": null,
              "secondary": null
            },
            {
              "label": "Discovery calls conducted",
              "value": 4,
              "unit": "calls",
              "source": "First-call recordings (repo), by call date",
              "status": "live",
              "customers": [],
              "double_check": null,
              "note": null,
              "secondary": null
            },
            {
              "label": "Proposal calls conducted",
              "value": 4,
              "unit": "calls",
              "source": "Proposal-call recordings (repo), by call date",
              "status": "live",
              "customers": [],
              "double_check": null,
              "note": null,
              "secondary": null
            },
            {
              "label": "Design sessions conducted",
              "value": 2,
              "unit": "sessions",
              "source": "Fathom \u00b7 paid + designer-owned clients (by meeting date)",
              "status": "snapshot",
              "customers": [],
              "double_check": null,
              "note": null,
              "secondary": null
            },
            {
              "label": "$500 deposits",
              "value": 0,
              "unit": "deposits",
              "source": "Designer Gmail (payment date) \u00b7 current owner",
              "status": "live",
              "customers": [],
              "double_check": null,
              "note": null,
              "secondary": null
            },
            {
              "label": "10% payments",
              "value": 0,
              "unit": "payments",
              "source": "Designer Gmail (10% order payment) \u00b7 current owner",
              "status": "snapshot",
              "customers": [],
              "double_check": null,
              "note": null,
              "secondary": null
            },
            {
              "label": "Active in design (pre-10%)",
              "value": 1,
              "unit": "customers",
              "source": "Design roster \u00b7 paid $500, not yet 10% \u00b7 current owner",
              "status": "snapshot",
              "customers": [],
              "double_check": null,
              "note": null,
              "secondary": null
            },
            {
              "label": "Avg discovery \u2192 proposal",
              "value": 12,
              "unit": "days",
              "source": "Repo transcript dates \u00b7 discovery \u2192 proposal",
              "status": "live",
              "customers": [],
              "double_check": null,
              "note": null,
              "secondary": null
            },
            {
              "label": "Avg proposal \u2192 $500",
              "value": null,
              "unit": "days",
              "source": "Repo proposal date \u2192 deposit date",
              "status": "live",
              "customers": [],
              "double_check": null,
              "note": null,
              "secondary": null
            },
            {
              "label": "Avg $500 \u2192 10%",
              "value": null,
              "unit": "days",
              "source": "Deposit date \u2192 10% payment date",
              "status": "live",
              "customers": [],
              "double_check": null,
              "note": null,
              "secondary": null
            }
          ]
        },
        {
          "id": "bruna",
          "title": "Bruna",
          "owner": "full funnel",
          "metrics": [
            {
              "label": "Discovery booked",
              "value": 4,
              "unit": "leads",
              "source": "Slack #new-lead-workflow (Assignee, booking date)",
              "status": "live",
              "customers": [],
              "double_check": null,
              "note": null,
              "secondary": null
            },
            {
              "label": "Discovery calls conducted",
              "value": 2,
              "unit": "calls",
              "source": "First-call recordings (repo), by call date",
              "status": "live",
              "customers": [],
              "double_check": null,
              "note": null,
              "secondary": null
            },
            {
              "label": "Proposal calls conducted",
              "value": 1,
              "unit": "calls",
              "source": "Proposal-call recordings (repo), by call date",
              "status": "live",
              "customers": [],
              "double_check": null,
              "note": null,
              "secondary": null
            },
            {
              "label": "Design sessions conducted",
              "value": 4,
              "unit": "sessions",
              "source": "Fathom \u00b7 paid + designer-owned clients (by meeting date)",
              "status": "snapshot",
              "customers": [],
              "double_check": null,
              "note": null,
              "secondary": null
            },
            {
              "label": "$500 deposits",
              "value": 0,
              "unit": "deposits",
              "source": "Designer Gmail (payment date) \u00b7 current owner",
              "status": "live",
              "customers": [],
              "double_check": null,
              "note": null,
              "secondary": null
            },
            {
              "label": "10% payments",
              "value": 0,
              "unit": "payments",
              "source": "Designer Gmail (10% order payment) \u00b7 current owner",
              "status": "snapshot",
              "customers": [],
              "double_check": null,
              "note": null,
              "secondary": null
            },
            {
              "label": "Active in design (pre-10%)",
              "value": 3,
              "unit": "customers",
              "source": "Design roster \u00b7 paid $500, not yet 10% \u00b7 current owner",
              "status": "snapshot",
              "customers": [],
              "double_check": null,
              "note": null,
              "secondary": null
            },
            {
              "label": "Avg discovery \u2192 proposal",
              "value": 30,
              "unit": "days",
              "source": "Repo transcript dates \u00b7 discovery \u2192 proposal",
              "status": "live",
              "customers": [],
              "double_check": null,
              "note": null,
              "secondary": null
            },
            {
              "label": "Avg proposal \u2192 $500",
              "value": null,
              "unit": "days",
              "source": "Repo proposal date \u2192 deposit date",
              "status": "live",
              "customers": [],
              "double_check": null,
              "note": null,
              "secondary": null
            },
            {
              "label": "Avg $500 \u2192 10%",
              "value": null,
              "unit": "days",
              "source": "Deposit date \u2192 10% payment date",
              "status": "live",
              "customers": [],
              "double_check": null,
              "note": null,
              "secondary": null
            }
          ]
        },
        {
          "id": "lais",
          "title": "La\u00eds",
          "owner": "full funnel",
          "metrics": [
            {
              "label": "Discovery booked",
              "value": 3,
              "unit": "leads",
              "source": "Slack #new-lead-workflow (Assignee, booking date)",
              "status": "live",
              "customers": [],
              "double_check": null,
              "note": null,
              "secondary": null
            },
            {
              "label": "Discovery calls conducted",
              "value": 3,
              "unit": "calls",
              "source": "First-call recordings (repo), by call date",
              "status": "live",
              "customers": [],
              "double_check": null,
              "note": null,
              "secondary": null
            },
            {
              "label": "Proposal calls conducted",
              "value": 0,
              "unit": "calls",
              "source": "Proposal-call recordings (repo), by call date",
              "status": "live",
              "customers": [],
              "double_check": null,
              "note": null,
              "secondary": null
            },
            {
              "label": "Design sessions conducted",
              "value": 3,
              "unit": "sessions",
              "source": "Fathom \u00b7 paid + designer-owned clients (by meeting date)",
              "status": "snapshot",
              "customers": [],
              "double_check": null,
              "note": null,
              "secondary": null
            },
            {
              "label": "$500 deposits",
              "value": 2,
              "unit": "deposits",
              "source": "Designer Gmail (payment date) \u00b7 current owner",
              "status": "live",
              "customers": [],
              "double_check": null,
              "note": null,
              "secondary": null
            },
            {
              "label": "10% payments",
              "value": 1,
              "unit": "payments",
              "source": "Designer Gmail (10% order payment) \u00b7 current owner",
              "status": "snapshot",
              "customers": [],
              "double_check": null,
              "note": null,
              "secondary": null
            },
            {
              "label": "Active in design (pre-10%)",
              "value": 2,
              "unit": "customers",
              "source": "Design roster \u00b7 paid $500, not yet 10% \u00b7 current owner",
              "status": "snapshot",
              "customers": [],
              "double_check": null,
              "note": null,
              "secondary": null
            },
            {
              "label": "Avg discovery \u2192 proposal",
              "value": null,
              "unit": "days",
              "source": "Repo transcript dates \u00b7 discovery \u2192 proposal",
              "status": "live",
              "customers": [],
              "double_check": null,
              "note": null,
              "secondary": null
            },
            {
              "label": "Avg proposal \u2192 $500",
              "value": 13,
              "unit": "days",
              "source": "Repo proposal date \u2192 deposit date",
              "status": "live",
              "customers": [],
              "double_check": null,
              "note": null,
              "secondary": null
            },
            {
              "label": "Avg $500 \u2192 10%",
              "value": 40,
              "unit": "days",
              "source": "Deposit date \u2192 10% payment date",
              "status": "live",
              "customers": [],
              "double_check": null,
              "note": null,
              "secondary": null
            }
          ]
        }
      ]
    }
  ]
};
