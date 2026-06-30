window.KPI_DATA = {
  "as_of": "2026-06-30T20:22:36+00:00",
  "as_of_human": "2026-06-30 20:22 UTC",
  "refresh_window_hours": 168,
  "scope": "internal",
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
      "start": "2026-05-31",
      "end": "2026-06-30",
      "funnel": {
        "stages": [
          {
            "key": "booked",
            "label": "Discovery booked",
            "value": 22,
            "customers": [
              "Alex Nelson",
              "Anna Ewa Ringwelski-Hannan",
              "Bianca Ker",
              "Caitlin Patton",
              "Ciara Tang",
              "Colby Brown",
              "Damon Gambuto",
              "Daniela Castano Vargas",
              "Dean Jutilla",
              "Ella Boyd-Wong",
              "Emily Armistead",
              "Jade Kim",
              "Joanne Wu",
              "Jorge Calvano",
              "Laurie King",
              "Maria Desanzo",
              "Marilyn White",
              "Michael Kramer",
              "Sabina Hasani",
              "Sahar Parsa",
              "Stephanie Ichinose",
              "Sulinh Lafontaine-Campisi"
            ]
          },
          {
            "key": "discovery",
            "label": "Discovery made",
            "value": 19,
            "customers": [
              "Alex Nelson",
              "Ania Ringwelski Hannan",
              "Caitlin Patton",
              "Ciara Morocho",
              "Clau Sanchez",
              "Colby Brown",
              "Damon Gambuto",
              "Daniela Castano Vargas",
              "Dean Jutilla",
              "Emily Armistead",
              "Jade Kim",
              "Jorge Calvano",
              "Lauren Nikaci",
              "Marilyn White",
              "Michael Kramer",
              "Moon Mehta",
              "Sabina Hasani",
              "Stephanie I",
              "katie sanders"
            ]
          },
          {
            "key": "proposal",
            "label": "Proposals made",
            "value": 12,
            "customers": [
              "Alizeh Banonisar",
              "Caitlin Patton",
              "Claudia Sanchez",
              "Colby Brown",
              "Jade Kim",
              "Jorge Calvano",
              "Kenny Lin",
              "Marilyn White",
              "Michael Kramer",
              "Moon Mehta",
              "Rachel OConnor",
              "Virginia Ferreira"
            ]
          },
          {
            "key": "deposit",
            "label": "$500 paid",
            "value": 3,
            "customers": [
              "Alex Bush",
              "Ellina Lapina",
              "Mary Sapountzakis"
            ]
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
              "value": 22,
              "unit": "leads",
              "source": "Slack #new-lead-workflow (Assignee, booking date)",
              "status": "live",
              "customers": [
                "Anna Ewa Ringwelski-Hannan",
                "Ciara Tang",
                "Jorge Calvano",
                "Damon Gambuto",
                "Emily Armistead",
                "Laurie King",
                "Marilyn White",
                "Michael Kramer",
                "Sabina Hasani",
                "Sahar Parsa",
                "Alex Nelson",
                "Daniela Castano Vargas",
                "Ella Boyd-Wong",
                "Jade Kim",
                "Maria Desanzo",
                "Bianca Ker",
                "Caitlin Patton",
                "Colby Brown",
                "Dean Jutilla",
                "Joanne Wu",
                "Stephanie Ichinose",
                "Sulinh Lafontaine-Campisi"
              ],
              "double_check": null,
              "note": "Booked by Assignee at booking time. Kostya-assigned bookings (e.g. Asma, Lauren, Charles, Moon Mehta, Lauren Nikaci) are excluded per the existing rule even when later reassigned to a designer. Trade Program rows (Katie Woodhull, Nique Anne Buya/student) excluded. Jun 23\u201330 added: Maria Desanzo (Bruna), Stephanie/Dean/Sulinh (La\u00eds), Laurie King (Suelen).",
              "secondary": null
            },
            {
              "label": "Discovery calls conducted",
              "value": 19,
              "unit": "calls",
              "source": "First-call recordings (repo), by call date",
              "status": "live",
              "customers": [
                "Ania Ringwelski Hannan",
                "Ciara Morocho",
                "Jorge Calvano",
                "katie sanders",
                "Damon Gambuto",
                "Emily Armistead",
                "Marilyn White",
                "Michael Kramer",
                "Moon Mehta",
                "Sabina Hasani",
                "Alex Nelson",
                "Daniela Castano Vargas",
                "Jade Kim",
                "Lauren Nikaci",
                "Caitlin Patton",
                "Clau Sanchez",
                "Colby Brown",
                "Dean Jutilla",
                "Stephanie I"
              ],
              "double_check": null,
              "note": null,
              "secondary": null
            },
            {
              "label": "Proposal calls conducted",
              "value": 12,
              "unit": "calls",
              "source": "Proposal-call recordings (repo), by call date",
              "status": "live",
              "customers": [
                "Jorge Calvano",
                "Alizeh Banonisar",
                "Marilyn White",
                "Michael Kramer",
                "Moon Mehta",
                "Rachel OConnor",
                "Jade Kim",
                "Virginia Ferreira",
                "Caitlin Patton",
                "Claudia Sanchez",
                "Colby Brown",
                "Kenny Lin"
              ],
              "double_check": "Customer email thread",
              "note": null,
              "secondary": null
            },
            {
              "label": "Design sessions conducted",
              "value": 16,
              "unit": "sessions",
              "source": "Fathom \u00b7 paid + designer-owned clients (by meeting date)",
              "status": "snapshot",
              "customers": [
                "Mary Sapountzakis \u2014 2026-06-11",
                "Ryan Lenox \u2014 2026-06-15",
                "Mary Sapountzakis \u2014 2026-06-16",
                "Mary Sapountzakis \u2014 2026-06-24",
                "Mary Sapountzakis \u2014 2026-06-30",
                "Sarah-Bruce Wisnom \u2014 2026-06-05",
                "Sarah-Bruce Wisnom \u2014 2026-06-11",
                "Val Nara \u2014 2026-06-03",
                "Asma Husain \u2014 2026-06-05",
                "Shiva Mendez \u2014 2026-06-10",
                "Val Nara \u2014 2026-06-11",
                "Val Nara \u2014 2026-06-24",
                "Shiva Mendez \u2014 2026-06-29",
                "Gloria Feurra \u2014 2026-06-02",
                "Ellina Lapina \u2014 2026-06-10",
                "Ellina Lapina \u2014 2026-06-12"
              ],
              "double_check": null,
              "note": "Post-$500 design working sessions, by meeting date, current owner (calendar+Fathom). Proposal-stage meetings NOT counted. Jun 23\u201330 added: Mary (Agustina Jun 24 'finalize design direction' + Jun 30 Design Session), Val + Shiva (Bruna Jun 24/29 'finalize design'). Excluded Jun 23\u201330: Stephanie (La\u00eds) = discovery/follow-up; Gloria (La\u00eds) = build/technical (paid 10% Jun 15); Katie/Woodhull = trade.",
              "secondary": null
            },
            {
              "label": "$500 deposits",
              "value": 3,
              "unit": "deposits",
              "source": "Designer Gmail (payment date) \u00b7 current owner",
              "status": "live",
              "customers": [
                "Mary Sapountzakis",
                "Alex Bush",
                "Ellina Lapina"
              ],
              "double_check": "Stripe",
              "note": "In-window $500s: Mary Sapountzakis ~Jun 11; Ryan Lenox ~May 30; Sarah-Bruce Wisnom ~May 25; Val Nara ~May 22; Alex Bush ~Jun 1; Ellina Lapina ~Jun 5. NO new $500 deposits detected Jun 17\u201330 (all designer-mail hits were build-phase logistics; Michael Kramer still deciding, not paid). Melanie Stambaugh confirmed lost (refund Jun 18). Dates approximate \u2014 confirm in Stripe.",
              "secondary": null
            },
            {
              "label": "10% payments",
              "value": 1,
              "unit": "payments",
              "source": "Designer Gmail (10% order payment) \u00b7 current owner",
              "status": "snapshot",
              "customers": [
                "Gloria Feurra"
              ],
              "double_check": "Stripe",
              "note": "Gloria Feurra: 10% project payment Jun 15, deposit was May 6 (40 days) \u2014 owner La\u00eds. NO new 10% payments detected Jun 17\u201330 (Yorgo's Jun 29 invoice = build-phase production balance, not a funnel 10%). Backfill older 10% payments for an exact #6/#9/#10.",
              "secondary": null
            },
            {
              "label": "Active in design (pre-10%)",
              "value": 8,
              "unit": "customers",
              "source": "Design roster \u00b7 paid $500, not yet 10% \u00b7 current owner",
              "status": "snapshot",
              "customers": [
                "Mary Sapountzakis",
                "Ryan Lenox",
                "Sarah-Bruce Wisnom",
                "Asma Husain",
                "Shiva Mendez",
                "Val Nara",
                "Alex Bush",
                "Ellina Lapina"
              ],
              "double_check": null,
              "note": "Active in design (paid $500, pre-10%) by current owner. Derived from post-$500 design activity; exact $500 dates pending Stripe. No roster changes Jun 17\u201330 (no new $500s, no new 10%): all 8 still in design. Gloria Feurra graduated to 10% Jun 15 (auto-removed).",
              "secondary": null
            },
            {
              "label": "Avg discovery \u2192 proposal",
              "value": 12,
              "unit": "days",
              "source": "Repo transcript dates \u00b7 discovery \u2192 proposal",
              "status": "live",
              "customers": [
                "Alizeh Banonisar \u2014 21d",
                "Caitlin Patton \u2014 4d",
                "Colby Brown \u2014 7d",
                "Jade Kim \u2014 17d",
                "Jorge Calvano \u2014 7d",
                "Kenny Lin \u2014 7d",
                "Marilyn White \u2014 12d",
                "Michael Kramer \u2014 5d",
                "Moon Mehta \u2014 7d",
                "Rachel OConnor \u2014 11d",
                "Virginia Ferreira \u2014 30d"
              ],
              "double_check": null,
              "note": "avg over 11 proposal(s) in window",
              "secondary": null
            },
            {
              "label": "Avg proposal \u2192 $500",
              "value": 17,
              "unit": "days",
              "source": "Repo proposal date \u2192 deposit date",
              "status": "live",
              "customers": [
                "Alex Bush \u2014 13d",
                "Mary Sapountzakis \u2014 21d"
              ],
              "double_check": null,
              "note": "avg over 2 deposit(s) in window",
              "secondary": null
            },
            {
              "label": "Avg $500 \u2192 10%",
              "value": 40,
              "unit": "days",
              "source": "Deposit date \u2192 10% payment date",
              "status": "live",
              "customers": [
                "Gloria Feurra \u2014 40d"
              ],
              "double_check": null,
              "note": "avg over 1 10% payment(s) in window",
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
              "customers": [
                "Anna Ewa Ringwelski-Hannan",
                "Ciara Tang",
                "Jorge Calvano"
              ],
              "double_check": null,
              "note": "Booked by Assignee at booking time. Kostya-assigned bookings (e.g. Asma, Lauren, Charles, Moon Mehta, Lauren Nikaci) are excluded per the existing rule even when later reassigned to a designer. Trade Program rows (Katie Woodhull, Nique Anne Buya/student) excluded. Jun 23\u201330 added: Maria Desanzo (Bruna), Stephanie/Dean/Sulinh (La\u00eds), Laurie King (Suelen).",
              "secondary": null
            },
            {
              "label": "Discovery calls conducted",
              "value": 4,
              "unit": "calls",
              "source": "First-call recordings (repo), by call date",
              "status": "live",
              "customers": [
                "Ania Ringwelski Hannan",
                "Ciara Morocho",
                "Jorge Calvano",
                "katie sanders"
              ],
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
              "customers": [
                "Jorge Calvano"
              ],
              "double_check": "Customer email thread",
              "note": null,
              "secondary": null
            },
            {
              "label": "Design sessions conducted",
              "value": 5,
              "unit": "sessions",
              "source": "Fathom \u00b7 paid + designer-owned clients (by meeting date)",
              "status": "snapshot",
              "customers": [
                "Mary Sapountzakis \u2014 2026-06-11",
                "Ryan Lenox \u2014 2026-06-15",
                "Mary Sapountzakis \u2014 2026-06-16",
                "Mary Sapountzakis \u2014 2026-06-24",
                "Mary Sapountzakis \u2014 2026-06-30"
              ],
              "double_check": null,
              "note": "Post-$500 design working sessions, by meeting date, current owner (calendar+Fathom). Proposal-stage meetings NOT counted. Jun 23\u201330 added: Mary (Agustina Jun 24 'finalize design direction' + Jun 30 Design Session), Val + Shiva (Bruna Jun 24/29 'finalize design'). Excluded Jun 23\u201330: Stephanie (La\u00eds) = discovery/follow-up; Gloria (La\u00eds) = build/technical (paid 10% Jun 15); Katie/Woodhull = trade.",
              "secondary": null
            },
            {
              "label": "$500 deposits",
              "value": 1,
              "unit": "deposits",
              "source": "Designer Gmail (payment date) \u00b7 current owner",
              "status": "live",
              "customers": [
                "Mary Sapountzakis"
              ],
              "double_check": "Stripe",
              "note": "In-window $500s: Mary Sapountzakis ~Jun 11; Ryan Lenox ~May 30; Sarah-Bruce Wisnom ~May 25; Val Nara ~May 22; Alex Bush ~Jun 1; Ellina Lapina ~Jun 5. NO new $500 deposits detected Jun 17\u201330 (all designer-mail hits were build-phase logistics; Michael Kramer still deciding, not paid). Melanie Stambaugh confirmed lost (refund Jun 18). Dates approximate \u2014 confirm in Stripe.",
              "secondary": null
            },
            {
              "label": "10% payments",
              "value": 0,
              "unit": "payments",
              "source": "Designer Gmail (10% order payment) \u00b7 current owner",
              "status": "snapshot",
              "customers": [],
              "double_check": "Stripe",
              "note": "Gloria Feurra: 10% project payment Jun 15, deposit was May 6 (40 days) \u2014 owner La\u00eds. NO new 10% payments detected Jun 17\u201330 (Yorgo's Jun 29 invoice = build-phase production balance, not a funnel 10%). Backfill older 10% payments for an exact #6/#9/#10.",
              "secondary": null
            },
            {
              "label": "Active in design (pre-10%)",
              "value": 2,
              "unit": "customers",
              "source": "Design roster \u00b7 paid $500, not yet 10% \u00b7 current owner",
              "status": "snapshot",
              "customers": [
                "Mary Sapountzakis",
                "Ryan Lenox"
              ],
              "double_check": null,
              "note": "Active in design (paid $500, pre-10%) by current owner. Derived from post-$500 design activity; exact $500 dates pending Stripe. No roster changes Jun 17\u201330 (no new $500s, no new 10%): all 8 still in design. Gloria Feurra graduated to 10% Jun 15 (auto-removed).",
              "secondary": null
            },
            {
              "label": "Avg discovery \u2192 proposal",
              "value": 7,
              "unit": "days",
              "source": "Repo transcript dates \u00b7 discovery \u2192 proposal",
              "status": "live",
              "customers": [
                "Jorge Calvano \u2014 7d"
              ],
              "double_check": null,
              "note": "avg over 1 proposal(s) in window",
              "secondary": null
            },
            {
              "label": "Avg proposal \u2192 $500",
              "value": 21,
              "unit": "days",
              "source": "Repo proposal date \u2192 deposit date",
              "status": "live",
              "customers": [
                "Mary Sapountzakis \u2014 21d"
              ],
              "double_check": null,
              "note": "avg over 1 deposit(s) in window",
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
              "note": "no 10% payments in window",
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
              "customers": [
                "Damon Gambuto",
                "Emily Armistead",
                "Laurie King",
                "Marilyn White",
                "Michael Kramer",
                "Sabina Hasani",
                "Sahar Parsa"
              ],
              "double_check": null,
              "note": "Booked by Assignee at booking time. Kostya-assigned bookings (e.g. Asma, Lauren, Charles, Moon Mehta, Lauren Nikaci) are excluded per the existing rule even when later reassigned to a designer. Trade Program rows (Katie Woodhull, Nique Anne Buya/student) excluded. Jun 23\u201330 added: Maria Desanzo (Bruna), Stephanie/Dean/Sulinh (La\u00eds), Laurie King (Suelen).",
              "secondary": null
            },
            {
              "label": "Discovery calls conducted",
              "value": 6,
              "unit": "calls",
              "source": "First-call recordings (repo), by call date",
              "status": "live",
              "customers": [
                "Damon Gambuto",
                "Emily Armistead",
                "Marilyn White",
                "Michael Kramer",
                "Moon Mehta",
                "Sabina Hasani"
              ],
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
              "customers": [
                "Alizeh Banonisar",
                "Marilyn White",
                "Michael Kramer",
                "Moon Mehta",
                "Rachel OConnor"
              ],
              "double_check": "Customer email thread",
              "note": null,
              "secondary": null
            },
            {
              "label": "Design sessions conducted",
              "value": 2,
              "unit": "sessions",
              "source": "Fathom \u00b7 paid + designer-owned clients (by meeting date)",
              "status": "snapshot",
              "customers": [
                "Sarah-Bruce Wisnom \u2014 2026-06-05",
                "Sarah-Bruce Wisnom \u2014 2026-06-11"
              ],
              "double_check": null,
              "note": "Post-$500 design working sessions, by meeting date, current owner (calendar+Fathom). Proposal-stage meetings NOT counted. Jun 23\u201330 added: Mary (Agustina Jun 24 'finalize design direction' + Jun 30 Design Session), Val + Shiva (Bruna Jun 24/29 'finalize design'). Excluded Jun 23\u201330: Stephanie (La\u00eds) = discovery/follow-up; Gloria (La\u00eds) = build/technical (paid 10% Jun 15); Katie/Woodhull = trade.",
              "secondary": null
            },
            {
              "label": "$500 deposits",
              "value": 0,
              "unit": "deposits",
              "source": "Designer Gmail (payment date) \u00b7 current owner",
              "status": "live",
              "customers": [],
              "double_check": "Stripe",
              "note": "In-window $500s: Mary Sapountzakis ~Jun 11; Ryan Lenox ~May 30; Sarah-Bruce Wisnom ~May 25; Val Nara ~May 22; Alex Bush ~Jun 1; Ellina Lapina ~Jun 5. NO new $500 deposits detected Jun 17\u201330 (all designer-mail hits were build-phase logistics; Michael Kramer still deciding, not paid). Melanie Stambaugh confirmed lost (refund Jun 18). Dates approximate \u2014 confirm in Stripe.",
              "secondary": null
            },
            {
              "label": "10% payments",
              "value": 0,
              "unit": "payments",
              "source": "Designer Gmail (10% order payment) \u00b7 current owner",
              "status": "snapshot",
              "customers": [],
              "double_check": "Stripe",
              "note": "Gloria Feurra: 10% project payment Jun 15, deposit was May 6 (40 days) \u2014 owner La\u00eds. NO new 10% payments detected Jun 17\u201330 (Yorgo's Jun 29 invoice = build-phase production balance, not a funnel 10%). Backfill older 10% payments for an exact #6/#9/#10.",
              "secondary": null
            },
            {
              "label": "Active in design (pre-10%)",
              "value": 1,
              "unit": "customers",
              "source": "Design roster \u00b7 paid $500, not yet 10% \u00b7 current owner",
              "status": "snapshot",
              "customers": [
                "Sarah-Bruce Wisnom"
              ],
              "double_check": null,
              "note": "Active in design (paid $500, pre-10%) by current owner. Derived from post-$500 design activity; exact $500 dates pending Stripe. No roster changes Jun 17\u201330 (no new $500s, no new 10%): all 8 still in design. Gloria Feurra graduated to 10% Jun 15 (auto-removed).",
              "secondary": null
            },
            {
              "label": "Avg discovery \u2192 proposal",
              "value": 11,
              "unit": "days",
              "source": "Repo transcript dates \u00b7 discovery \u2192 proposal",
              "status": "live",
              "customers": [
                "Alizeh Banonisar \u2014 21d",
                "Marilyn White \u2014 12d",
                "Michael Kramer \u2014 5d",
                "Moon Mehta \u2014 7d",
                "Rachel OConnor \u2014 11d"
              ],
              "double_check": null,
              "note": "avg over 5 proposal(s) in window",
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
              "note": "no deposits in window",
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
              "note": "no 10% payments in window",
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
              "value": 5,
              "unit": "leads",
              "source": "Slack #new-lead-workflow (Assignee, booking date)",
              "status": "live",
              "customers": [
                "Alex Nelson",
                "Daniela Castano Vargas",
                "Ella Boyd-Wong",
                "Jade Kim",
                "Maria Desanzo"
              ],
              "double_check": null,
              "note": "Booked by Assignee at booking time. Kostya-assigned bookings (e.g. Asma, Lauren, Charles, Moon Mehta, Lauren Nikaci) are excluded per the existing rule even when later reassigned to a designer. Trade Program rows (Katie Woodhull, Nique Anne Buya/student) excluded. Jun 23\u201330 added: Maria Desanzo (Bruna), Stephanie/Dean/Sulinh (La\u00eds), Laurie King (Suelen).",
              "secondary": null
            },
            {
              "label": "Discovery calls conducted",
              "value": 4,
              "unit": "calls",
              "source": "First-call recordings (repo), by call date",
              "status": "live",
              "customers": [
                "Alex Nelson",
                "Daniela Castano Vargas",
                "Jade Kim",
                "Lauren Nikaci"
              ],
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
              "customers": [
                "Jade Kim",
                "Virginia Ferreira"
              ],
              "double_check": "Customer email thread",
              "note": null,
              "secondary": null
            },
            {
              "label": "Design sessions conducted",
              "value": 6,
              "unit": "sessions",
              "source": "Fathom \u00b7 paid + designer-owned clients (by meeting date)",
              "status": "snapshot",
              "customers": [
                "Val Nara \u2014 2026-06-03",
                "Asma Husain \u2014 2026-06-05",
                "Shiva Mendez \u2014 2026-06-10",
                "Val Nara \u2014 2026-06-11",
                "Val Nara \u2014 2026-06-24",
                "Shiva Mendez \u2014 2026-06-29"
              ],
              "double_check": null,
              "note": "Post-$500 design working sessions, by meeting date, current owner (calendar+Fathom). Proposal-stage meetings NOT counted. Jun 23\u201330 added: Mary (Agustina Jun 24 'finalize design direction' + Jun 30 Design Session), Val + Shiva (Bruna Jun 24/29 'finalize design'). Excluded Jun 23\u201330: Stephanie (La\u00eds) = discovery/follow-up; Gloria (La\u00eds) = build/technical (paid 10% Jun 15); Katie/Woodhull = trade.",
              "secondary": null
            },
            {
              "label": "$500 deposits",
              "value": 0,
              "unit": "deposits",
              "source": "Designer Gmail (payment date) \u00b7 current owner",
              "status": "live",
              "customers": [],
              "double_check": "Stripe",
              "note": "In-window $500s: Mary Sapountzakis ~Jun 11; Ryan Lenox ~May 30; Sarah-Bruce Wisnom ~May 25; Val Nara ~May 22; Alex Bush ~Jun 1; Ellina Lapina ~Jun 5. NO new $500 deposits detected Jun 17\u201330 (all designer-mail hits were build-phase logistics; Michael Kramer still deciding, not paid). Melanie Stambaugh confirmed lost (refund Jun 18). Dates approximate \u2014 confirm in Stripe.",
              "secondary": null
            },
            {
              "label": "10% payments",
              "value": 0,
              "unit": "payments",
              "source": "Designer Gmail (10% order payment) \u00b7 current owner",
              "status": "snapshot",
              "customers": [],
              "double_check": "Stripe",
              "note": "Gloria Feurra: 10% project payment Jun 15, deposit was May 6 (40 days) \u2014 owner La\u00eds. NO new 10% payments detected Jun 17\u201330 (Yorgo's Jun 29 invoice = build-phase production balance, not a funnel 10%). Backfill older 10% payments for an exact #6/#9/#10.",
              "secondary": null
            },
            {
              "label": "Active in design (pre-10%)",
              "value": 3,
              "unit": "customers",
              "source": "Design roster \u00b7 paid $500, not yet 10% \u00b7 current owner",
              "status": "snapshot",
              "customers": [
                "Asma Husain",
                "Shiva Mendez",
                "Val Nara"
              ],
              "double_check": null,
              "note": "Active in design (paid $500, pre-10%) by current owner. Derived from post-$500 design activity; exact $500 dates pending Stripe. No roster changes Jun 17\u201330 (no new $500s, no new 10%): all 8 still in design. Gloria Feurra graduated to 10% Jun 15 (auto-removed).",
              "secondary": null
            },
            {
              "label": "Avg discovery \u2192 proposal",
              "value": 24,
              "unit": "days",
              "source": "Repo transcript dates \u00b7 discovery \u2192 proposal",
              "status": "live",
              "customers": [
                "Jade Kim \u2014 17d",
                "Virginia Ferreira \u2014 30d"
              ],
              "double_check": null,
              "note": "avg over 2 proposal(s) in window",
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
              "note": "no deposits in window",
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
              "note": "no 10% payments in window",
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
              "value": 7,
              "unit": "leads",
              "source": "Slack #new-lead-workflow (Assignee, booking date)",
              "status": "live",
              "customers": [
                "Bianca Ker",
                "Caitlin Patton",
                "Colby Brown",
                "Dean Jutilla",
                "Joanne Wu",
                "Stephanie Ichinose",
                "Sulinh Lafontaine-Campisi"
              ],
              "double_check": null,
              "note": "Booked by Assignee at booking time. Kostya-assigned bookings (e.g. Asma, Lauren, Charles, Moon Mehta, Lauren Nikaci) are excluded per the existing rule even when later reassigned to a designer. Trade Program rows (Katie Woodhull, Nique Anne Buya/student) excluded. Jun 23\u201330 added: Maria Desanzo (Bruna), Stephanie/Dean/Sulinh (La\u00eds), Laurie King (Suelen).",
              "secondary": null
            },
            {
              "label": "Discovery calls conducted",
              "value": 5,
              "unit": "calls",
              "source": "First-call recordings (repo), by call date",
              "status": "live",
              "customers": [
                "Caitlin Patton",
                "Clau Sanchez",
                "Colby Brown",
                "Dean Jutilla",
                "Stephanie I"
              ],
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
              "customers": [
                "Caitlin Patton",
                "Claudia Sanchez",
                "Colby Brown",
                "Kenny Lin"
              ],
              "double_check": "Customer email thread",
              "note": null,
              "secondary": null
            },
            {
              "label": "Design sessions conducted",
              "value": 3,
              "unit": "sessions",
              "source": "Fathom \u00b7 paid + designer-owned clients (by meeting date)",
              "status": "snapshot",
              "customers": [
                "Gloria Feurra \u2014 2026-06-02",
                "Ellina Lapina \u2014 2026-06-10",
                "Ellina Lapina \u2014 2026-06-12"
              ],
              "double_check": null,
              "note": "Post-$500 design working sessions, by meeting date, current owner (calendar+Fathom). Proposal-stage meetings NOT counted. Jun 23\u201330 added: Mary (Agustina Jun 24 'finalize design direction' + Jun 30 Design Session), Val + Shiva (Bruna Jun 24/29 'finalize design'). Excluded Jun 23\u201330: Stephanie (La\u00eds) = discovery/follow-up; Gloria (La\u00eds) = build/technical (paid 10% Jun 15); Katie/Woodhull = trade.",
              "secondary": null
            },
            {
              "label": "$500 deposits",
              "value": 2,
              "unit": "deposits",
              "source": "Designer Gmail (payment date) \u00b7 current owner",
              "status": "live",
              "customers": [
                "Alex Bush",
                "Ellina Lapina"
              ],
              "double_check": "Stripe",
              "note": "In-window $500s: Mary Sapountzakis ~Jun 11; Ryan Lenox ~May 30; Sarah-Bruce Wisnom ~May 25; Val Nara ~May 22; Alex Bush ~Jun 1; Ellina Lapina ~Jun 5. NO new $500 deposits detected Jun 17\u201330 (all designer-mail hits were build-phase logistics; Michael Kramer still deciding, not paid). Melanie Stambaugh confirmed lost (refund Jun 18). Dates approximate \u2014 confirm in Stripe.",
              "secondary": null
            },
            {
              "label": "10% payments",
              "value": 1,
              "unit": "payments",
              "source": "Designer Gmail (10% order payment) \u00b7 current owner",
              "status": "snapshot",
              "customers": [
                "Gloria Feurra"
              ],
              "double_check": "Stripe",
              "note": "Gloria Feurra: 10% project payment Jun 15, deposit was May 6 (40 days) \u2014 owner La\u00eds. NO new 10% payments detected Jun 17\u201330 (Yorgo's Jun 29 invoice = build-phase production balance, not a funnel 10%). Backfill older 10% payments for an exact #6/#9/#10.",
              "secondary": null
            },
            {
              "label": "Active in design (pre-10%)",
              "value": 2,
              "unit": "customers",
              "source": "Design roster \u00b7 paid $500, not yet 10% \u00b7 current owner",
              "status": "snapshot",
              "customers": [
                "Alex Bush",
                "Ellina Lapina"
              ],
              "double_check": null,
              "note": "Active in design (paid $500, pre-10%) by current owner. Derived from post-$500 design activity; exact $500 dates pending Stripe. No roster changes Jun 17\u201330 (no new $500s, no new 10%): all 8 still in design. Gloria Feurra graduated to 10% Jun 15 (auto-removed).",
              "secondary": null
            },
            {
              "label": "Avg discovery \u2192 proposal",
              "value": 6,
              "unit": "days",
              "source": "Repo transcript dates \u00b7 discovery \u2192 proposal",
              "status": "live",
              "customers": [
                "Caitlin Patton \u2014 4d",
                "Colby Brown \u2014 7d",
                "Kenny Lin \u2014 7d"
              ],
              "double_check": null,
              "note": "avg over 3 proposal(s) in window",
              "secondary": null
            },
            {
              "label": "Avg proposal \u2192 $500",
              "value": 13,
              "unit": "days",
              "source": "Repo proposal date \u2192 deposit date",
              "status": "live",
              "customers": [
                "Alex Bush \u2014 13d"
              ],
              "double_check": null,
              "note": "avg over 1 deposit(s) in window",
              "secondary": null
            },
            {
              "label": "Avg $500 \u2192 10%",
              "value": 40,
              "unit": "days",
              "source": "Deposit date \u2192 10% payment date",
              "status": "live",
              "customers": [
                "Gloria Feurra \u2014 40d"
              ],
              "double_check": null,
              "note": "avg over 1 10% payment(s) in window",
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
            "value": 17,
            "customers": [
              "Aaron Abney",
              "Alex Bush",
              "Claudia Bialostozky",
              "Elizabeth Grave",
              "Estelle",
              "Gabriel Guerrero",
              "Kenny Lin",
              "Lori Tomassian",
              "Ludgy Charles",
              "Mary Sapountzakis",
              "Melissa Bright",
              "Sean",
              "Shayna Moos",
              "Taylor Kim",
              "Val Nara",
              "Virginia Ferreira",
              "Will Yeung"
            ]
          },
          {
            "key": "discovery",
            "label": "Discovery made",
            "value": 20,
            "customers": [
              "Alex Bush",
              "Alizeh Banonisar",
              "Asma Husain",
              "Elizabeth Grave",
              "Gabriel Guerrero",
              "Kenny Lin",
              "Lauren Hamby",
              "Lesley Goldman",
              "Liz Conn",
              "Lori Tomassian",
              "Ludgy Charles",
              "Mary Sapountzakis",
              "Melissa Bright",
              "Nique Anne Buya",
              "Rachel OConnor",
              "Shayna Moos",
              "Taylor Kim",
              "Val Nara",
              "Virginia Ferreira",
              "William Yeung"
            ]
          },
          {
            "key": "proposal",
            "label": "Proposals made",
            "value": 21,
            "customers": [
              "Alex Bush",
              "Asma Husain",
              "Christine Kindel",
              "Elizabeth Grave",
              "Geraldine Johnson",
              "Gloria Feurra",
              "Hannah Moore",
              "Lauren Hamby",
              "Lesley Goldman",
              "Liz Capriola",
              "Liz Conn",
              "Lori Tomassian",
              "Ludgy Charles",
              "Mary Sapountzakis",
              "Melissa Bright",
              "Mike Desaro",
              "Shayna Moos",
              "Stef Omtzigt",
              "Val Nara",
              "ilya gordon",
              "shiva mendez"
            ]
          },
          {
            "key": "deposit",
            "label": "$500 paid",
            "value": 3,
            "customers": [
              "Ryan Lenox",
              "Sarah-Bruce Wisnom",
              "Val Nara"
            ]
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
              "customers": [
                "Claudia Bialostozky",
                "Lori Tomassian",
                "Ludgy Charles",
                "Mary Sapountzakis",
                "Taylor Kim",
                "Will Yeung",
                "Aaron Abney",
                "Shayna Moos",
                "Melissa Bright",
                "Val Nara",
                "Virginia Ferreira",
                "Alex Bush",
                "Elizabeth Grave",
                "Estelle",
                "Gabriel Guerrero",
                "Kenny Lin",
                "Sean"
              ],
              "double_check": null,
              "note": "Booked by Assignee at booking time. Kostya-assigned bookings (e.g. Asma, Lauren, Charles, Moon Mehta, Lauren Nikaci) are excluded per the existing rule even when later reassigned to a designer. Trade Program rows (Katie Woodhull, Nique Anne Buya/student) excluded. Jun 23\u201330 added: Maria Desanzo (Bruna), Stephanie/Dean/Sulinh (La\u00eds), Laurie King (Suelen).",
              "secondary": null
            },
            {
              "label": "Discovery calls conducted",
              "value": 20,
              "unit": "calls",
              "source": "First-call recordings (repo), by call date",
              "status": "live",
              "customers": [
                "Lesley Goldman",
                "Lori Tomassian",
                "Ludgy Charles",
                "Mary Sapountzakis",
                "Taylor Kim",
                "William Yeung",
                "Alizeh Banonisar",
                "Lauren Hamby",
                "Nique Anne Buya",
                "Rachel OConnor",
                "Shayna Moos",
                "Asma Husain",
                "Melissa Bright",
                "Val Nara",
                "Virginia Ferreira",
                "Alex Bush",
                "Elizabeth Grave",
                "Gabriel Guerrero",
                "Kenny Lin",
                "Liz Conn"
              ],
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
              "customers": [
                "Christine Kindel",
                "Lesley Goldman",
                "Lori Tomassian",
                "Ludgy Charles",
                "Mary Sapountzakis",
                "Mike Desaro",
                "Lauren Hamby",
                "Shayna Moos",
                "Stef Omtzigt",
                "ilya gordon",
                "Asma Husain",
                "Hannah Moore",
                "Liz Capriola",
                "Melissa Bright",
                "Val Nara",
                "shiva mendez",
                "Alex Bush",
                "Elizabeth Grave",
                "Geraldine Johnson",
                "Gloria Feurra",
                "Liz Conn"
              ],
              "double_check": "Customer email thread",
              "note": null,
              "secondary": null
            },
            {
              "label": "Design sessions conducted",
              "value": 4,
              "unit": "sessions",
              "source": "Fathom \u00b7 paid + designer-owned clients (by meeting date)",
              "status": "snapshot",
              "customers": [
                "Val Nara \u2014 2026-05-28",
                "Asma Husain \u2014 2026-05-29",
                "Alex Bush \u2014 2026-05-19",
                "Alex Bush \u2014 2026-05-27"
              ],
              "double_check": null,
              "note": "Post-$500 design working sessions, by meeting date, current owner (calendar+Fathom). Proposal-stage meetings NOT counted. Jun 23\u201330 added: Mary (Agustina Jun 24 'finalize design direction' + Jun 30 Design Session), Val + Shiva (Bruna Jun 24/29 'finalize design'). Excluded Jun 23\u201330: Stephanie (La\u00eds) = discovery/follow-up; Gloria (La\u00eds) = build/technical (paid 10% Jun 15); Katie/Woodhull = trade.",
              "secondary": null
            },
            {
              "label": "$500 deposits",
              "value": 3,
              "unit": "deposits",
              "source": "Designer Gmail (payment date) \u00b7 current owner",
              "status": "live",
              "customers": [
                "Ryan Lenox",
                "Sarah-Bruce Wisnom",
                "Val Nara"
              ],
              "double_check": "Stripe",
              "note": "In-window $500s: Mary Sapountzakis ~Jun 11; Ryan Lenox ~May 30; Sarah-Bruce Wisnom ~May 25; Val Nara ~May 22; Alex Bush ~Jun 1; Ellina Lapina ~Jun 5. NO new $500 deposits detected Jun 17\u201330 (all designer-mail hits were build-phase logistics; Michael Kramer still deciding, not paid). Melanie Stambaugh confirmed lost (refund Jun 18). Dates approximate \u2014 confirm in Stripe.",
              "secondary": null
            },
            {
              "label": "10% payments",
              "value": 0,
              "unit": "payments",
              "source": "Designer Gmail (10% order payment) \u00b7 current owner",
              "status": "snapshot",
              "customers": [],
              "double_check": "Stripe",
              "note": "Gloria Feurra: 10% project payment Jun 15, deposit was May 6 (40 days) \u2014 owner La\u00eds. NO new 10% payments detected Jun 17\u201330 (Yorgo's Jun 29 invoice = build-phase production balance, not a funnel 10%). Backfill older 10% payments for an exact #6/#9/#10.",
              "secondary": null
            },
            {
              "label": "Active in design (pre-10%)",
              "value": 8,
              "unit": "customers",
              "source": "Design roster \u00b7 paid $500, not yet 10% \u00b7 current owner",
              "status": "snapshot",
              "customers": [
                "Mary Sapountzakis",
                "Ryan Lenox",
                "Sarah-Bruce Wisnom",
                "Asma Husain",
                "Shiva Mendez",
                "Val Nara",
                "Alex Bush",
                "Ellina Lapina"
              ],
              "double_check": null,
              "note": "Active in design (paid $500, pre-10%) by current owner. Derived from post-$500 design activity; exact $500 dates pending Stripe. No roster changes Jun 17\u201330 (no new $500s, no new 10%): all 8 still in design. Gloria Feurra graduated to 10% Jun 15 (auto-removed).",
              "secondary": null
            },
            {
              "label": "Avg discovery \u2192 proposal",
              "value": 9,
              "unit": "days",
              "source": "Repo transcript dates \u00b7 discovery \u2192 proposal",
              "status": "live",
              "customers": [
                "Alex Bush \u2014 7d",
                "Asma Husain \u2014 11d",
                "Christine Kindel \u2014 5d",
                "Elizabeth Grave \u2014 11d",
                "Geraldine Johnson \u2014 8d",
                "Gloria Feurra \u2014 7d",
                "Hannah Moore \u2014 21d",
                "Lauren Hamby \u2014 10d",
                "Lesley Goldman \u2014 10d",
                "Liz Capriola \u2014 10d",
                "Liz Conn \u2014 14d",
                "Lori Tomassian \u2014 3d",
                "Ludgy Charles \u2014 14d",
                "Mary Sapountzakis \u2014 6d",
                "Melissa Bright \u2014 7d",
                "Mike Desaro \u2014 7d",
                "Shayna Moos \u2014 8d",
                "Stef Omtzigt \u2014 12d",
                "Val Nara \u2014 8d",
                "ilya gordon \u2014 8d",
                "shiva mendez \u2014 11d"
              ],
              "double_check": null,
              "note": "avg over 21 proposal(s) in window",
              "secondary": null
            },
            {
              "label": "Avg proposal \u2192 $500",
              "value": 30,
              "unit": "days",
              "source": "Repo proposal date \u2192 deposit date",
              "status": "live",
              "customers": [
                "Ryan Lenox \u2014 43d",
                "Sarah-Bruce Wisnom \u2014 46d",
                "Val Nara \u2014 1d"
              ],
              "double_check": null,
              "note": "avg over 3 deposit(s) in window",
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
              "note": "no 10% payments in window",
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
              "customers": [
                "Claudia Bialostozky",
                "Lori Tomassian",
                "Ludgy Charles",
                "Mary Sapountzakis",
                "Taylor Kim",
                "Will Yeung"
              ],
              "double_check": null,
              "note": "Booked by Assignee at booking time. Kostya-assigned bookings (e.g. Asma, Lauren, Charles, Moon Mehta, Lauren Nikaci) are excluded per the existing rule even when later reassigned to a designer. Trade Program rows (Katie Woodhull, Nique Anne Buya/student) excluded. Jun 23\u201330 added: Maria Desanzo (Bruna), Stephanie/Dean/Sulinh (La\u00eds), Laurie King (Suelen).",
              "secondary": null
            },
            {
              "label": "Discovery calls conducted",
              "value": 6,
              "unit": "calls",
              "source": "First-call recordings (repo), by call date",
              "status": "live",
              "customers": [
                "Lesley Goldman",
                "Lori Tomassian",
                "Ludgy Charles",
                "Mary Sapountzakis",
                "Taylor Kim",
                "William Yeung"
              ],
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
              "customers": [
                "Christine Kindel",
                "Lesley Goldman",
                "Lori Tomassian",
                "Ludgy Charles",
                "Mary Sapountzakis",
                "Mike Desaro"
              ],
              "double_check": "Customer email thread",
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
              "note": "Post-$500 design working sessions, by meeting date, current owner (calendar+Fathom). Proposal-stage meetings NOT counted. Jun 23\u201330 added: Mary (Agustina Jun 24 'finalize design direction' + Jun 30 Design Session), Val + Shiva (Bruna Jun 24/29 'finalize design'). Excluded Jun 23\u201330: Stephanie (La\u00eds) = discovery/follow-up; Gloria (La\u00eds) = build/technical (paid 10% Jun 15); Katie/Woodhull = trade.",
              "secondary": null
            },
            {
              "label": "$500 deposits",
              "value": 1,
              "unit": "deposits",
              "source": "Designer Gmail (payment date) \u00b7 current owner",
              "status": "live",
              "customers": [
                "Ryan Lenox"
              ],
              "double_check": "Stripe",
              "note": "In-window $500s: Mary Sapountzakis ~Jun 11; Ryan Lenox ~May 30; Sarah-Bruce Wisnom ~May 25; Val Nara ~May 22; Alex Bush ~Jun 1; Ellina Lapina ~Jun 5. NO new $500 deposits detected Jun 17\u201330 (all designer-mail hits were build-phase logistics; Michael Kramer still deciding, not paid). Melanie Stambaugh confirmed lost (refund Jun 18). Dates approximate \u2014 confirm in Stripe.",
              "secondary": null
            },
            {
              "label": "10% payments",
              "value": 0,
              "unit": "payments",
              "source": "Designer Gmail (10% order payment) \u00b7 current owner",
              "status": "snapshot",
              "customers": [],
              "double_check": "Stripe",
              "note": "Gloria Feurra: 10% project payment Jun 15, deposit was May 6 (40 days) \u2014 owner La\u00eds. NO new 10% payments detected Jun 17\u201330 (Yorgo's Jun 29 invoice = build-phase production balance, not a funnel 10%). Backfill older 10% payments for an exact #6/#9/#10.",
              "secondary": null
            },
            {
              "label": "Active in design (pre-10%)",
              "value": 2,
              "unit": "customers",
              "source": "Design roster \u00b7 paid $500, not yet 10% \u00b7 current owner",
              "status": "snapshot",
              "customers": [
                "Mary Sapountzakis",
                "Ryan Lenox"
              ],
              "double_check": null,
              "note": "Active in design (paid $500, pre-10%) by current owner. Derived from post-$500 design activity; exact $500 dates pending Stripe. No roster changes Jun 17\u201330 (no new $500s, no new 10%): all 8 still in design. Gloria Feurra graduated to 10% Jun 15 (auto-removed).",
              "secondary": null
            },
            {
              "label": "Avg discovery \u2192 proposal",
              "value": 8,
              "unit": "days",
              "source": "Repo transcript dates \u00b7 discovery \u2192 proposal",
              "status": "live",
              "customers": [
                "Christine Kindel \u2014 5d",
                "Lesley Goldman \u2014 10d",
                "Lori Tomassian \u2014 3d",
                "Ludgy Charles \u2014 14d",
                "Mary Sapountzakis \u2014 6d",
                "Mike Desaro \u2014 7d"
              ],
              "double_check": null,
              "note": "avg over 6 proposal(s) in window",
              "secondary": null
            },
            {
              "label": "Avg proposal \u2192 $500",
              "value": 43,
              "unit": "days",
              "source": "Repo proposal date \u2192 deposit date",
              "status": "live",
              "customers": [
                "Ryan Lenox \u2014 43d"
              ],
              "double_check": null,
              "note": "avg over 1 deposit(s) in window",
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
              "note": "no 10% payments in window",
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
              "customers": [
                "Aaron Abney",
                "Shayna Moos"
              ],
              "double_check": null,
              "note": "Booked by Assignee at booking time. Kostya-assigned bookings (e.g. Asma, Lauren, Charles, Moon Mehta, Lauren Nikaci) are excluded per the existing rule even when later reassigned to a designer. Trade Program rows (Katie Woodhull, Nique Anne Buya/student) excluded. Jun 23\u201330 added: Maria Desanzo (Bruna), Stephanie/Dean/Sulinh (La\u00eds), Laurie King (Suelen).",
              "secondary": null
            },
            {
              "label": "Discovery calls conducted",
              "value": 5,
              "unit": "calls",
              "source": "First-call recordings (repo), by call date",
              "status": "live",
              "customers": [
                "Alizeh Banonisar",
                "Lauren Hamby",
                "Nique Anne Buya",
                "Rachel OConnor",
                "Shayna Moos"
              ],
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
              "customers": [
                "Lauren Hamby",
                "Shayna Moos",
                "Stef Omtzigt",
                "ilya gordon"
              ],
              "double_check": "Customer email thread",
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
              "note": "Post-$500 design working sessions, by meeting date, current owner (calendar+Fathom). Proposal-stage meetings NOT counted. Jun 23\u201330 added: Mary (Agustina Jun 24 'finalize design direction' + Jun 30 Design Session), Val + Shiva (Bruna Jun 24/29 'finalize design'). Excluded Jun 23\u201330: Stephanie (La\u00eds) = discovery/follow-up; Gloria (La\u00eds) = build/technical (paid 10% Jun 15); Katie/Woodhull = trade.",
              "secondary": null
            },
            {
              "label": "$500 deposits",
              "value": 1,
              "unit": "deposits",
              "source": "Designer Gmail (payment date) \u00b7 current owner",
              "status": "live",
              "customers": [
                "Sarah-Bruce Wisnom"
              ],
              "double_check": "Stripe",
              "note": "In-window $500s: Mary Sapountzakis ~Jun 11; Ryan Lenox ~May 30; Sarah-Bruce Wisnom ~May 25; Val Nara ~May 22; Alex Bush ~Jun 1; Ellina Lapina ~Jun 5. NO new $500 deposits detected Jun 17\u201330 (all designer-mail hits were build-phase logistics; Michael Kramer still deciding, not paid). Melanie Stambaugh confirmed lost (refund Jun 18). Dates approximate \u2014 confirm in Stripe.",
              "secondary": null
            },
            {
              "label": "10% payments",
              "value": 0,
              "unit": "payments",
              "source": "Designer Gmail (10% order payment) \u00b7 current owner",
              "status": "snapshot",
              "customers": [],
              "double_check": "Stripe",
              "note": "Gloria Feurra: 10% project payment Jun 15, deposit was May 6 (40 days) \u2014 owner La\u00eds. NO new 10% payments detected Jun 17\u201330 (Yorgo's Jun 29 invoice = build-phase production balance, not a funnel 10%). Backfill older 10% payments for an exact #6/#9/#10.",
              "secondary": null
            },
            {
              "label": "Active in design (pre-10%)",
              "value": 1,
              "unit": "customers",
              "source": "Design roster \u00b7 paid $500, not yet 10% \u00b7 current owner",
              "status": "snapshot",
              "customers": [
                "Sarah-Bruce Wisnom"
              ],
              "double_check": null,
              "note": "Active in design (paid $500, pre-10%) by current owner. Derived from post-$500 design activity; exact $500 dates pending Stripe. No roster changes Jun 17\u201330 (no new $500s, no new 10%): all 8 still in design. Gloria Feurra graduated to 10% Jun 15 (auto-removed).",
              "secondary": null
            },
            {
              "label": "Avg discovery \u2192 proposal",
              "value": 10,
              "unit": "days",
              "source": "Repo transcript dates \u00b7 discovery \u2192 proposal",
              "status": "live",
              "customers": [
                "Lauren Hamby \u2014 10d",
                "Shayna Moos \u2014 8d",
                "Stef Omtzigt \u2014 12d",
                "ilya gordon \u2014 8d"
              ],
              "double_check": null,
              "note": "avg over 4 proposal(s) in window",
              "secondary": null
            },
            {
              "label": "Avg proposal \u2192 $500",
              "value": 46,
              "unit": "days",
              "source": "Repo proposal date \u2192 deposit date",
              "status": "live",
              "customers": [
                "Sarah-Bruce Wisnom \u2014 46d"
              ],
              "double_check": null,
              "note": "avg over 1 deposit(s) in window",
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
              "note": "no 10% payments in window",
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
              "customers": [
                "Melissa Bright",
                "Val Nara",
                "Virginia Ferreira"
              ],
              "double_check": null,
              "note": "Booked by Assignee at booking time. Kostya-assigned bookings (e.g. Asma, Lauren, Charles, Moon Mehta, Lauren Nikaci) are excluded per the existing rule even when later reassigned to a designer. Trade Program rows (Katie Woodhull, Nique Anne Buya/student) excluded. Jun 23\u201330 added: Maria Desanzo (Bruna), Stephanie/Dean/Sulinh (La\u00eds), Laurie King (Suelen).",
              "secondary": null
            },
            {
              "label": "Discovery calls conducted",
              "value": 4,
              "unit": "calls",
              "source": "First-call recordings (repo), by call date",
              "status": "live",
              "customers": [
                "Asma Husain",
                "Melissa Bright",
                "Val Nara",
                "Virginia Ferreira"
              ],
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
              "customers": [
                "Asma Husain",
                "Hannah Moore",
                "Liz Capriola",
                "Melissa Bright",
                "Val Nara",
                "shiva mendez"
              ],
              "double_check": "Customer email thread",
              "note": null,
              "secondary": null
            },
            {
              "label": "Design sessions conducted",
              "value": 2,
              "unit": "sessions",
              "source": "Fathom \u00b7 paid + designer-owned clients (by meeting date)",
              "status": "snapshot",
              "customers": [
                "Val Nara \u2014 2026-05-28",
                "Asma Husain \u2014 2026-05-29"
              ],
              "double_check": null,
              "note": "Post-$500 design working sessions, by meeting date, current owner (calendar+Fathom). Proposal-stage meetings NOT counted. Jun 23\u201330 added: Mary (Agustina Jun 24 'finalize design direction' + Jun 30 Design Session), Val + Shiva (Bruna Jun 24/29 'finalize design'). Excluded Jun 23\u201330: Stephanie (La\u00eds) = discovery/follow-up; Gloria (La\u00eds) = build/technical (paid 10% Jun 15); Katie/Woodhull = trade.",
              "secondary": null
            },
            {
              "label": "$500 deposits",
              "value": 1,
              "unit": "deposits",
              "source": "Designer Gmail (payment date) \u00b7 current owner",
              "status": "live",
              "customers": [
                "Val Nara"
              ],
              "double_check": "Stripe",
              "note": "In-window $500s: Mary Sapountzakis ~Jun 11; Ryan Lenox ~May 30; Sarah-Bruce Wisnom ~May 25; Val Nara ~May 22; Alex Bush ~Jun 1; Ellina Lapina ~Jun 5. NO new $500 deposits detected Jun 17\u201330 (all designer-mail hits were build-phase logistics; Michael Kramer still deciding, not paid). Melanie Stambaugh confirmed lost (refund Jun 18). Dates approximate \u2014 confirm in Stripe.",
              "secondary": null
            },
            {
              "label": "10% payments",
              "value": 0,
              "unit": "payments",
              "source": "Designer Gmail (10% order payment) \u00b7 current owner",
              "status": "snapshot",
              "customers": [],
              "double_check": "Stripe",
              "note": "Gloria Feurra: 10% project payment Jun 15, deposit was May 6 (40 days) \u2014 owner La\u00eds. NO new 10% payments detected Jun 17\u201330 (Yorgo's Jun 29 invoice = build-phase production balance, not a funnel 10%). Backfill older 10% payments for an exact #6/#9/#10.",
              "secondary": null
            },
            {
              "label": "Active in design (pre-10%)",
              "value": 3,
              "unit": "customers",
              "source": "Design roster \u00b7 paid $500, not yet 10% \u00b7 current owner",
              "status": "snapshot",
              "customers": [
                "Asma Husain",
                "Shiva Mendez",
                "Val Nara"
              ],
              "double_check": null,
              "note": "Active in design (paid $500, pre-10%) by current owner. Derived from post-$500 design activity; exact $500 dates pending Stripe. No roster changes Jun 17\u201330 (no new $500s, no new 10%): all 8 still in design. Gloria Feurra graduated to 10% Jun 15 (auto-removed).",
              "secondary": null
            },
            {
              "label": "Avg discovery \u2192 proposal",
              "value": 11,
              "unit": "days",
              "source": "Repo transcript dates \u00b7 discovery \u2192 proposal",
              "status": "live",
              "customers": [
                "Asma Husain \u2014 11d",
                "Hannah Moore \u2014 21d",
                "Liz Capriola \u2014 10d",
                "Melissa Bright \u2014 7d",
                "Val Nara \u2014 8d",
                "shiva mendez \u2014 11d"
              ],
              "double_check": null,
              "note": "avg over 6 proposal(s) in window",
              "secondary": null
            },
            {
              "label": "Avg proposal \u2192 $500",
              "value": 1,
              "unit": "days",
              "source": "Repo proposal date \u2192 deposit date",
              "status": "live",
              "customers": [
                "Val Nara \u2014 1d"
              ],
              "double_check": null,
              "note": "avg over 1 deposit(s) in window",
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
              "note": "no 10% payments in window",
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
              "customers": [
                "Alex Bush",
                "Elizabeth Grave",
                "Estelle",
                "Gabriel Guerrero",
                "Kenny Lin",
                "Sean"
              ],
              "double_check": null,
              "note": "Booked by Assignee at booking time. Kostya-assigned bookings (e.g. Asma, Lauren, Charles, Moon Mehta, Lauren Nikaci) are excluded per the existing rule even when later reassigned to a designer. Trade Program rows (Katie Woodhull, Nique Anne Buya/student) excluded. Jun 23\u201330 added: Maria Desanzo (Bruna), Stephanie/Dean/Sulinh (La\u00eds), Laurie King (Suelen).",
              "secondary": null
            },
            {
              "label": "Discovery calls conducted",
              "value": 5,
              "unit": "calls",
              "source": "First-call recordings (repo), by call date",
              "status": "live",
              "customers": [
                "Alex Bush",
                "Elizabeth Grave",
                "Gabriel Guerrero",
                "Kenny Lin",
                "Liz Conn"
              ],
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
              "customers": [
                "Alex Bush",
                "Elizabeth Grave",
                "Geraldine Johnson",
                "Gloria Feurra",
                "Liz Conn"
              ],
              "double_check": "Customer email thread",
              "note": null,
              "secondary": null
            },
            {
              "label": "Design sessions conducted",
              "value": 2,
              "unit": "sessions",
              "source": "Fathom \u00b7 paid + designer-owned clients (by meeting date)",
              "status": "snapshot",
              "customers": [
                "Alex Bush \u2014 2026-05-19",
                "Alex Bush \u2014 2026-05-27"
              ],
              "double_check": null,
              "note": "Post-$500 design working sessions, by meeting date, current owner (calendar+Fathom). Proposal-stage meetings NOT counted. Jun 23\u201330 added: Mary (Agustina Jun 24 'finalize design direction' + Jun 30 Design Session), Val + Shiva (Bruna Jun 24/29 'finalize design'). Excluded Jun 23\u201330: Stephanie (La\u00eds) = discovery/follow-up; Gloria (La\u00eds) = build/technical (paid 10% Jun 15); Katie/Woodhull = trade.",
              "secondary": null
            },
            {
              "label": "$500 deposits",
              "value": 0,
              "unit": "deposits",
              "source": "Designer Gmail (payment date) \u00b7 current owner",
              "status": "live",
              "customers": [],
              "double_check": "Stripe",
              "note": "In-window $500s: Mary Sapountzakis ~Jun 11; Ryan Lenox ~May 30; Sarah-Bruce Wisnom ~May 25; Val Nara ~May 22; Alex Bush ~Jun 1; Ellina Lapina ~Jun 5. NO new $500 deposits detected Jun 17\u201330 (all designer-mail hits were build-phase logistics; Michael Kramer still deciding, not paid). Melanie Stambaugh confirmed lost (refund Jun 18). Dates approximate \u2014 confirm in Stripe.",
              "secondary": null
            },
            {
              "label": "10% payments",
              "value": 0,
              "unit": "payments",
              "source": "Designer Gmail (10% order payment) \u00b7 current owner",
              "status": "snapshot",
              "customers": [],
              "double_check": "Stripe",
              "note": "Gloria Feurra: 10% project payment Jun 15, deposit was May 6 (40 days) \u2014 owner La\u00eds. NO new 10% payments detected Jun 17\u201330 (Yorgo's Jun 29 invoice = build-phase production balance, not a funnel 10%). Backfill older 10% payments for an exact #6/#9/#10.",
              "secondary": null
            },
            {
              "label": "Active in design (pre-10%)",
              "value": 2,
              "unit": "customers",
              "source": "Design roster \u00b7 paid $500, not yet 10% \u00b7 current owner",
              "status": "snapshot",
              "customers": [
                "Alex Bush",
                "Ellina Lapina"
              ],
              "double_check": null,
              "note": "Active in design (paid $500, pre-10%) by current owner. Derived from post-$500 design activity; exact $500 dates pending Stripe. No roster changes Jun 17\u201330 (no new $500s, no new 10%): all 8 still in design. Gloria Feurra graduated to 10% Jun 15 (auto-removed).",
              "secondary": null
            },
            {
              "label": "Avg discovery \u2192 proposal",
              "value": 9,
              "unit": "days",
              "source": "Repo transcript dates \u00b7 discovery \u2192 proposal",
              "status": "live",
              "customers": [
                "Alex Bush \u2014 7d",
                "Elizabeth Grave \u2014 11d",
                "Geraldine Johnson \u2014 8d",
                "Gloria Feurra \u2014 7d",
                "Liz Conn \u2014 14d"
              ],
              "double_check": null,
              "note": "avg over 5 proposal(s) in window",
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
              "note": "no deposits in window",
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
              "note": "no 10% payments in window",
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
      "end": "2026-06-30",
      "funnel": {
        "stages": [
          {
            "key": "booked",
            "label": "Discovery booked",
            "value": 22,
            "customers": [
              "Alex Nelson",
              "Anna Ewa Ringwelski-Hannan",
              "Bianca Ker",
              "Caitlin Patton",
              "Ciara Tang",
              "Colby Brown",
              "Damon Gambuto",
              "Daniela Castano Vargas",
              "Dean Jutilla",
              "Ella Boyd-Wong",
              "Emily Armistead",
              "Jade Kim",
              "Joanne Wu",
              "Jorge Calvano",
              "Laurie King",
              "Maria Desanzo",
              "Marilyn White",
              "Michael Kramer",
              "Sabina Hasani",
              "Sahar Parsa",
              "Stephanie Ichinose",
              "Sulinh Lafontaine-Campisi"
            ]
          },
          {
            "key": "discovery",
            "label": "Discovery made",
            "value": 19,
            "customers": [
              "Alex Nelson",
              "Ania Ringwelski Hannan",
              "Caitlin Patton",
              "Ciara Morocho",
              "Clau Sanchez",
              "Colby Brown",
              "Damon Gambuto",
              "Daniela Castano Vargas",
              "Dean Jutilla",
              "Emily Armistead",
              "Jade Kim",
              "Jorge Calvano",
              "Lauren Nikaci",
              "Marilyn White",
              "Michael Kramer",
              "Moon Mehta",
              "Sabina Hasani",
              "Stephanie I",
              "katie sanders"
            ]
          },
          {
            "key": "proposal",
            "label": "Proposals made",
            "value": 12,
            "customers": [
              "Alizeh Banonisar",
              "Caitlin Patton",
              "Claudia Sanchez",
              "Colby Brown",
              "Jade Kim",
              "Jorge Calvano",
              "Kenny Lin",
              "Marilyn White",
              "Michael Kramer",
              "Moon Mehta",
              "Rachel OConnor",
              "Virginia Ferreira"
            ]
          },
          {
            "key": "deposit",
            "label": "$500 paid",
            "value": 3,
            "customers": [
              "Alex Bush",
              "Ellina Lapina",
              "Mary Sapountzakis"
            ]
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
              "value": 22,
              "unit": "leads",
              "source": "Slack #new-lead-workflow (Assignee, booking date)",
              "status": "live",
              "customers": [
                "Anna Ewa Ringwelski-Hannan",
                "Ciara Tang",
                "Jorge Calvano",
                "Damon Gambuto",
                "Emily Armistead",
                "Laurie King",
                "Marilyn White",
                "Michael Kramer",
                "Sabina Hasani",
                "Sahar Parsa",
                "Alex Nelson",
                "Daniela Castano Vargas",
                "Ella Boyd-Wong",
                "Jade Kim",
                "Maria Desanzo",
                "Bianca Ker",
                "Caitlin Patton",
                "Colby Brown",
                "Dean Jutilla",
                "Joanne Wu",
                "Stephanie Ichinose",
                "Sulinh Lafontaine-Campisi"
              ],
              "double_check": null,
              "note": "Booked by Assignee at booking time. Kostya-assigned bookings (e.g. Asma, Lauren, Charles, Moon Mehta, Lauren Nikaci) are excluded per the existing rule even when later reassigned to a designer. Trade Program rows (Katie Woodhull, Nique Anne Buya/student) excluded. Jun 23\u201330 added: Maria Desanzo (Bruna), Stephanie/Dean/Sulinh (La\u00eds), Laurie King (Suelen).",
              "secondary": null
            },
            {
              "label": "Discovery calls conducted",
              "value": 19,
              "unit": "calls",
              "source": "First-call recordings (repo), by call date",
              "status": "live",
              "customers": [
                "Ania Ringwelski Hannan",
                "Ciara Morocho",
                "Jorge Calvano",
                "katie sanders",
                "Damon Gambuto",
                "Emily Armistead",
                "Marilyn White",
                "Michael Kramer",
                "Moon Mehta",
                "Sabina Hasani",
                "Alex Nelson",
                "Daniela Castano Vargas",
                "Jade Kim",
                "Lauren Nikaci",
                "Caitlin Patton",
                "Clau Sanchez",
                "Colby Brown",
                "Dean Jutilla",
                "Stephanie I"
              ],
              "double_check": null,
              "note": null,
              "secondary": null
            },
            {
              "label": "Proposal calls conducted",
              "value": 12,
              "unit": "calls",
              "source": "Proposal-call recordings (repo), by call date",
              "status": "live",
              "customers": [
                "Jorge Calvano",
                "Alizeh Banonisar",
                "Marilyn White",
                "Michael Kramer",
                "Moon Mehta",
                "Rachel OConnor",
                "Jade Kim",
                "Virginia Ferreira",
                "Caitlin Patton",
                "Claudia Sanchez",
                "Colby Brown",
                "Kenny Lin"
              ],
              "double_check": "Customer email thread",
              "note": null,
              "secondary": null
            },
            {
              "label": "Design sessions conducted",
              "value": 16,
              "unit": "sessions",
              "source": "Fathom \u00b7 paid + designer-owned clients (by meeting date)",
              "status": "snapshot",
              "customers": [
                "Mary Sapountzakis \u2014 2026-06-11",
                "Ryan Lenox \u2014 2026-06-15",
                "Mary Sapountzakis \u2014 2026-06-16",
                "Mary Sapountzakis \u2014 2026-06-24",
                "Mary Sapountzakis \u2014 2026-06-30",
                "Sarah-Bruce Wisnom \u2014 2026-06-05",
                "Sarah-Bruce Wisnom \u2014 2026-06-11",
                "Val Nara \u2014 2026-06-03",
                "Asma Husain \u2014 2026-06-05",
                "Shiva Mendez \u2014 2026-06-10",
                "Val Nara \u2014 2026-06-11",
                "Val Nara \u2014 2026-06-24",
                "Shiva Mendez \u2014 2026-06-29",
                "Gloria Feurra \u2014 2026-06-02",
                "Ellina Lapina \u2014 2026-06-10",
                "Ellina Lapina \u2014 2026-06-12"
              ],
              "double_check": null,
              "note": "Post-$500 design working sessions, by meeting date, current owner (calendar+Fathom). Proposal-stage meetings NOT counted. Jun 23\u201330 added: Mary (Agustina Jun 24 'finalize design direction' + Jun 30 Design Session), Val + Shiva (Bruna Jun 24/29 'finalize design'). Excluded Jun 23\u201330: Stephanie (La\u00eds) = discovery/follow-up; Gloria (La\u00eds) = build/technical (paid 10% Jun 15); Katie/Woodhull = trade.",
              "secondary": null
            },
            {
              "label": "$500 deposits",
              "value": 3,
              "unit": "deposits",
              "source": "Designer Gmail (payment date) \u00b7 current owner",
              "status": "live",
              "customers": [
                "Mary Sapountzakis",
                "Alex Bush",
                "Ellina Lapina"
              ],
              "double_check": "Stripe",
              "note": "In-window $500s: Mary Sapountzakis ~Jun 11; Ryan Lenox ~May 30; Sarah-Bruce Wisnom ~May 25; Val Nara ~May 22; Alex Bush ~Jun 1; Ellina Lapina ~Jun 5. NO new $500 deposits detected Jun 17\u201330 (all designer-mail hits were build-phase logistics; Michael Kramer still deciding, not paid). Melanie Stambaugh confirmed lost (refund Jun 18). Dates approximate \u2014 confirm in Stripe.",
              "secondary": null
            },
            {
              "label": "10% payments",
              "value": 1,
              "unit": "payments",
              "source": "Designer Gmail (10% order payment) \u00b7 current owner",
              "status": "snapshot",
              "customers": [
                "Gloria Feurra"
              ],
              "double_check": "Stripe",
              "note": "Gloria Feurra: 10% project payment Jun 15, deposit was May 6 (40 days) \u2014 owner La\u00eds. NO new 10% payments detected Jun 17\u201330 (Yorgo's Jun 29 invoice = build-phase production balance, not a funnel 10%). Backfill older 10% payments for an exact #6/#9/#10.",
              "secondary": null
            },
            {
              "label": "Active in design (pre-10%)",
              "value": 8,
              "unit": "customers",
              "source": "Design roster \u00b7 paid $500, not yet 10% \u00b7 current owner",
              "status": "snapshot",
              "customers": [
                "Mary Sapountzakis",
                "Ryan Lenox",
                "Sarah-Bruce Wisnom",
                "Asma Husain",
                "Shiva Mendez",
                "Val Nara",
                "Alex Bush",
                "Ellina Lapina"
              ],
              "double_check": null,
              "note": "Active in design (paid $500, pre-10%) by current owner. Derived from post-$500 design activity; exact $500 dates pending Stripe. No roster changes Jun 17\u201330 (no new $500s, no new 10%): all 8 still in design. Gloria Feurra graduated to 10% Jun 15 (auto-removed).",
              "secondary": null
            },
            {
              "label": "Avg discovery \u2192 proposal",
              "value": 12,
              "unit": "days",
              "source": "Repo transcript dates \u00b7 discovery \u2192 proposal",
              "status": "live",
              "customers": [
                "Alizeh Banonisar \u2014 21d",
                "Caitlin Patton \u2014 4d",
                "Colby Brown \u2014 7d",
                "Jade Kim \u2014 17d",
                "Jorge Calvano \u2014 7d",
                "Kenny Lin \u2014 7d",
                "Marilyn White \u2014 12d",
                "Michael Kramer \u2014 5d",
                "Moon Mehta \u2014 7d",
                "Rachel OConnor \u2014 11d",
                "Virginia Ferreira \u2014 30d"
              ],
              "double_check": null,
              "note": "avg over 11 proposal(s) in window",
              "secondary": null
            },
            {
              "label": "Avg proposal \u2192 $500",
              "value": 17,
              "unit": "days",
              "source": "Repo proposal date \u2192 deposit date",
              "status": "live",
              "customers": [
                "Alex Bush \u2014 13d",
                "Mary Sapountzakis \u2014 21d"
              ],
              "double_check": null,
              "note": "avg over 2 deposit(s) in window",
              "secondary": null
            },
            {
              "label": "Avg $500 \u2192 10%",
              "value": 40,
              "unit": "days",
              "source": "Deposit date \u2192 10% payment date",
              "status": "live",
              "customers": [
                "Gloria Feurra \u2014 40d"
              ],
              "double_check": null,
              "note": "avg over 1 10% payment(s) in window",
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
              "customers": [
                "Anna Ewa Ringwelski-Hannan",
                "Ciara Tang",
                "Jorge Calvano"
              ],
              "double_check": null,
              "note": "Booked by Assignee at booking time. Kostya-assigned bookings (e.g. Asma, Lauren, Charles, Moon Mehta, Lauren Nikaci) are excluded per the existing rule even when later reassigned to a designer. Trade Program rows (Katie Woodhull, Nique Anne Buya/student) excluded. Jun 23\u201330 added: Maria Desanzo (Bruna), Stephanie/Dean/Sulinh (La\u00eds), Laurie King (Suelen).",
              "secondary": null
            },
            {
              "label": "Discovery calls conducted",
              "value": 4,
              "unit": "calls",
              "source": "First-call recordings (repo), by call date",
              "status": "live",
              "customers": [
                "Ania Ringwelski Hannan",
                "Ciara Morocho",
                "Jorge Calvano",
                "katie sanders"
              ],
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
              "customers": [
                "Jorge Calvano"
              ],
              "double_check": "Customer email thread",
              "note": null,
              "secondary": null
            },
            {
              "label": "Design sessions conducted",
              "value": 5,
              "unit": "sessions",
              "source": "Fathom \u00b7 paid + designer-owned clients (by meeting date)",
              "status": "snapshot",
              "customers": [
                "Mary Sapountzakis \u2014 2026-06-11",
                "Ryan Lenox \u2014 2026-06-15",
                "Mary Sapountzakis \u2014 2026-06-16",
                "Mary Sapountzakis \u2014 2026-06-24",
                "Mary Sapountzakis \u2014 2026-06-30"
              ],
              "double_check": null,
              "note": "Post-$500 design working sessions, by meeting date, current owner (calendar+Fathom). Proposal-stage meetings NOT counted. Jun 23\u201330 added: Mary (Agustina Jun 24 'finalize design direction' + Jun 30 Design Session), Val + Shiva (Bruna Jun 24/29 'finalize design'). Excluded Jun 23\u201330: Stephanie (La\u00eds) = discovery/follow-up; Gloria (La\u00eds) = build/technical (paid 10% Jun 15); Katie/Woodhull = trade.",
              "secondary": null
            },
            {
              "label": "$500 deposits",
              "value": 1,
              "unit": "deposits",
              "source": "Designer Gmail (payment date) \u00b7 current owner",
              "status": "live",
              "customers": [
                "Mary Sapountzakis"
              ],
              "double_check": "Stripe",
              "note": "In-window $500s: Mary Sapountzakis ~Jun 11; Ryan Lenox ~May 30; Sarah-Bruce Wisnom ~May 25; Val Nara ~May 22; Alex Bush ~Jun 1; Ellina Lapina ~Jun 5. NO new $500 deposits detected Jun 17\u201330 (all designer-mail hits were build-phase logistics; Michael Kramer still deciding, not paid). Melanie Stambaugh confirmed lost (refund Jun 18). Dates approximate \u2014 confirm in Stripe.",
              "secondary": null
            },
            {
              "label": "10% payments",
              "value": 0,
              "unit": "payments",
              "source": "Designer Gmail (10% order payment) \u00b7 current owner",
              "status": "snapshot",
              "customers": [],
              "double_check": "Stripe",
              "note": "Gloria Feurra: 10% project payment Jun 15, deposit was May 6 (40 days) \u2014 owner La\u00eds. NO new 10% payments detected Jun 17\u201330 (Yorgo's Jun 29 invoice = build-phase production balance, not a funnel 10%). Backfill older 10% payments for an exact #6/#9/#10.",
              "secondary": null
            },
            {
              "label": "Active in design (pre-10%)",
              "value": 2,
              "unit": "customers",
              "source": "Design roster \u00b7 paid $500, not yet 10% \u00b7 current owner",
              "status": "snapshot",
              "customers": [
                "Mary Sapountzakis",
                "Ryan Lenox"
              ],
              "double_check": null,
              "note": "Active in design (paid $500, pre-10%) by current owner. Derived from post-$500 design activity; exact $500 dates pending Stripe. No roster changes Jun 17\u201330 (no new $500s, no new 10%): all 8 still in design. Gloria Feurra graduated to 10% Jun 15 (auto-removed).",
              "secondary": null
            },
            {
              "label": "Avg discovery \u2192 proposal",
              "value": 7,
              "unit": "days",
              "source": "Repo transcript dates \u00b7 discovery \u2192 proposal",
              "status": "live",
              "customers": [
                "Jorge Calvano \u2014 7d"
              ],
              "double_check": null,
              "note": "avg over 1 proposal(s) in window",
              "secondary": null
            },
            {
              "label": "Avg proposal \u2192 $500",
              "value": 21,
              "unit": "days",
              "source": "Repo proposal date \u2192 deposit date",
              "status": "live",
              "customers": [
                "Mary Sapountzakis \u2014 21d"
              ],
              "double_check": null,
              "note": "avg over 1 deposit(s) in window",
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
              "note": "no 10% payments in window",
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
              "customers": [
                "Damon Gambuto",
                "Emily Armistead",
                "Laurie King",
                "Marilyn White",
                "Michael Kramer",
                "Sabina Hasani",
                "Sahar Parsa"
              ],
              "double_check": null,
              "note": "Booked by Assignee at booking time. Kostya-assigned bookings (e.g. Asma, Lauren, Charles, Moon Mehta, Lauren Nikaci) are excluded per the existing rule even when later reassigned to a designer. Trade Program rows (Katie Woodhull, Nique Anne Buya/student) excluded. Jun 23\u201330 added: Maria Desanzo (Bruna), Stephanie/Dean/Sulinh (La\u00eds), Laurie King (Suelen).",
              "secondary": null
            },
            {
              "label": "Discovery calls conducted",
              "value": 6,
              "unit": "calls",
              "source": "First-call recordings (repo), by call date",
              "status": "live",
              "customers": [
                "Damon Gambuto",
                "Emily Armistead",
                "Marilyn White",
                "Michael Kramer",
                "Moon Mehta",
                "Sabina Hasani"
              ],
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
              "customers": [
                "Alizeh Banonisar",
                "Marilyn White",
                "Michael Kramer",
                "Moon Mehta",
                "Rachel OConnor"
              ],
              "double_check": "Customer email thread",
              "note": null,
              "secondary": null
            },
            {
              "label": "Design sessions conducted",
              "value": 2,
              "unit": "sessions",
              "source": "Fathom \u00b7 paid + designer-owned clients (by meeting date)",
              "status": "snapshot",
              "customers": [
                "Sarah-Bruce Wisnom \u2014 2026-06-05",
                "Sarah-Bruce Wisnom \u2014 2026-06-11"
              ],
              "double_check": null,
              "note": "Post-$500 design working sessions, by meeting date, current owner (calendar+Fathom). Proposal-stage meetings NOT counted. Jun 23\u201330 added: Mary (Agustina Jun 24 'finalize design direction' + Jun 30 Design Session), Val + Shiva (Bruna Jun 24/29 'finalize design'). Excluded Jun 23\u201330: Stephanie (La\u00eds) = discovery/follow-up; Gloria (La\u00eds) = build/technical (paid 10% Jun 15); Katie/Woodhull = trade.",
              "secondary": null
            },
            {
              "label": "$500 deposits",
              "value": 0,
              "unit": "deposits",
              "source": "Designer Gmail (payment date) \u00b7 current owner",
              "status": "live",
              "customers": [],
              "double_check": "Stripe",
              "note": "In-window $500s: Mary Sapountzakis ~Jun 11; Ryan Lenox ~May 30; Sarah-Bruce Wisnom ~May 25; Val Nara ~May 22; Alex Bush ~Jun 1; Ellina Lapina ~Jun 5. NO new $500 deposits detected Jun 17\u201330 (all designer-mail hits were build-phase logistics; Michael Kramer still deciding, not paid). Melanie Stambaugh confirmed lost (refund Jun 18). Dates approximate \u2014 confirm in Stripe.",
              "secondary": null
            },
            {
              "label": "10% payments",
              "value": 0,
              "unit": "payments",
              "source": "Designer Gmail (10% order payment) \u00b7 current owner",
              "status": "snapshot",
              "customers": [],
              "double_check": "Stripe",
              "note": "Gloria Feurra: 10% project payment Jun 15, deposit was May 6 (40 days) \u2014 owner La\u00eds. NO new 10% payments detected Jun 17\u201330 (Yorgo's Jun 29 invoice = build-phase production balance, not a funnel 10%). Backfill older 10% payments for an exact #6/#9/#10.",
              "secondary": null
            },
            {
              "label": "Active in design (pre-10%)",
              "value": 1,
              "unit": "customers",
              "source": "Design roster \u00b7 paid $500, not yet 10% \u00b7 current owner",
              "status": "snapshot",
              "customers": [
                "Sarah-Bruce Wisnom"
              ],
              "double_check": null,
              "note": "Active in design (paid $500, pre-10%) by current owner. Derived from post-$500 design activity; exact $500 dates pending Stripe. No roster changes Jun 17\u201330 (no new $500s, no new 10%): all 8 still in design. Gloria Feurra graduated to 10% Jun 15 (auto-removed).",
              "secondary": null
            },
            {
              "label": "Avg discovery \u2192 proposal",
              "value": 11,
              "unit": "days",
              "source": "Repo transcript dates \u00b7 discovery \u2192 proposal",
              "status": "live",
              "customers": [
                "Alizeh Banonisar \u2014 21d",
                "Marilyn White \u2014 12d",
                "Michael Kramer \u2014 5d",
                "Moon Mehta \u2014 7d",
                "Rachel OConnor \u2014 11d"
              ],
              "double_check": null,
              "note": "avg over 5 proposal(s) in window",
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
              "note": "no deposits in window",
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
              "note": "no 10% payments in window",
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
              "value": 5,
              "unit": "leads",
              "source": "Slack #new-lead-workflow (Assignee, booking date)",
              "status": "live",
              "customers": [
                "Alex Nelson",
                "Daniela Castano Vargas",
                "Ella Boyd-Wong",
                "Jade Kim",
                "Maria Desanzo"
              ],
              "double_check": null,
              "note": "Booked by Assignee at booking time. Kostya-assigned bookings (e.g. Asma, Lauren, Charles, Moon Mehta, Lauren Nikaci) are excluded per the existing rule even when later reassigned to a designer. Trade Program rows (Katie Woodhull, Nique Anne Buya/student) excluded. Jun 23\u201330 added: Maria Desanzo (Bruna), Stephanie/Dean/Sulinh (La\u00eds), Laurie King (Suelen).",
              "secondary": null
            },
            {
              "label": "Discovery calls conducted",
              "value": 4,
              "unit": "calls",
              "source": "First-call recordings (repo), by call date",
              "status": "live",
              "customers": [
                "Alex Nelson",
                "Daniela Castano Vargas",
                "Jade Kim",
                "Lauren Nikaci"
              ],
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
              "customers": [
                "Jade Kim",
                "Virginia Ferreira"
              ],
              "double_check": "Customer email thread",
              "note": null,
              "secondary": null
            },
            {
              "label": "Design sessions conducted",
              "value": 6,
              "unit": "sessions",
              "source": "Fathom \u00b7 paid + designer-owned clients (by meeting date)",
              "status": "snapshot",
              "customers": [
                "Val Nara \u2014 2026-06-03",
                "Asma Husain \u2014 2026-06-05",
                "Shiva Mendez \u2014 2026-06-10",
                "Val Nara \u2014 2026-06-11",
                "Val Nara \u2014 2026-06-24",
                "Shiva Mendez \u2014 2026-06-29"
              ],
              "double_check": null,
              "note": "Post-$500 design working sessions, by meeting date, current owner (calendar+Fathom). Proposal-stage meetings NOT counted. Jun 23\u201330 added: Mary (Agustina Jun 24 'finalize design direction' + Jun 30 Design Session), Val + Shiva (Bruna Jun 24/29 'finalize design'). Excluded Jun 23\u201330: Stephanie (La\u00eds) = discovery/follow-up; Gloria (La\u00eds) = build/technical (paid 10% Jun 15); Katie/Woodhull = trade.",
              "secondary": null
            },
            {
              "label": "$500 deposits",
              "value": 0,
              "unit": "deposits",
              "source": "Designer Gmail (payment date) \u00b7 current owner",
              "status": "live",
              "customers": [],
              "double_check": "Stripe",
              "note": "In-window $500s: Mary Sapountzakis ~Jun 11; Ryan Lenox ~May 30; Sarah-Bruce Wisnom ~May 25; Val Nara ~May 22; Alex Bush ~Jun 1; Ellina Lapina ~Jun 5. NO new $500 deposits detected Jun 17\u201330 (all designer-mail hits were build-phase logistics; Michael Kramer still deciding, not paid). Melanie Stambaugh confirmed lost (refund Jun 18). Dates approximate \u2014 confirm in Stripe.",
              "secondary": null
            },
            {
              "label": "10% payments",
              "value": 0,
              "unit": "payments",
              "source": "Designer Gmail (10% order payment) \u00b7 current owner",
              "status": "snapshot",
              "customers": [],
              "double_check": "Stripe",
              "note": "Gloria Feurra: 10% project payment Jun 15, deposit was May 6 (40 days) \u2014 owner La\u00eds. NO new 10% payments detected Jun 17\u201330 (Yorgo's Jun 29 invoice = build-phase production balance, not a funnel 10%). Backfill older 10% payments for an exact #6/#9/#10.",
              "secondary": null
            },
            {
              "label": "Active in design (pre-10%)",
              "value": 3,
              "unit": "customers",
              "source": "Design roster \u00b7 paid $500, not yet 10% \u00b7 current owner",
              "status": "snapshot",
              "customers": [
                "Asma Husain",
                "Shiva Mendez",
                "Val Nara"
              ],
              "double_check": null,
              "note": "Active in design (paid $500, pre-10%) by current owner. Derived from post-$500 design activity; exact $500 dates pending Stripe. No roster changes Jun 17\u201330 (no new $500s, no new 10%): all 8 still in design. Gloria Feurra graduated to 10% Jun 15 (auto-removed).",
              "secondary": null
            },
            {
              "label": "Avg discovery \u2192 proposal",
              "value": 24,
              "unit": "days",
              "source": "Repo transcript dates \u00b7 discovery \u2192 proposal",
              "status": "live",
              "customers": [
                "Jade Kim \u2014 17d",
                "Virginia Ferreira \u2014 30d"
              ],
              "double_check": null,
              "note": "avg over 2 proposal(s) in window",
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
              "note": "no deposits in window",
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
              "note": "no 10% payments in window",
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
              "value": 7,
              "unit": "leads",
              "source": "Slack #new-lead-workflow (Assignee, booking date)",
              "status": "live",
              "customers": [
                "Bianca Ker",
                "Caitlin Patton",
                "Colby Brown",
                "Dean Jutilla",
                "Joanne Wu",
                "Stephanie Ichinose",
                "Sulinh Lafontaine-Campisi"
              ],
              "double_check": null,
              "note": "Booked by Assignee at booking time. Kostya-assigned bookings (e.g. Asma, Lauren, Charles, Moon Mehta, Lauren Nikaci) are excluded per the existing rule even when later reassigned to a designer. Trade Program rows (Katie Woodhull, Nique Anne Buya/student) excluded. Jun 23\u201330 added: Maria Desanzo (Bruna), Stephanie/Dean/Sulinh (La\u00eds), Laurie King (Suelen).",
              "secondary": null
            },
            {
              "label": "Discovery calls conducted",
              "value": 5,
              "unit": "calls",
              "source": "First-call recordings (repo), by call date",
              "status": "live",
              "customers": [
                "Caitlin Patton",
                "Clau Sanchez",
                "Colby Brown",
                "Dean Jutilla",
                "Stephanie I"
              ],
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
              "customers": [
                "Caitlin Patton",
                "Claudia Sanchez",
                "Colby Brown",
                "Kenny Lin"
              ],
              "double_check": "Customer email thread",
              "note": null,
              "secondary": null
            },
            {
              "label": "Design sessions conducted",
              "value": 3,
              "unit": "sessions",
              "source": "Fathom \u00b7 paid + designer-owned clients (by meeting date)",
              "status": "snapshot",
              "customers": [
                "Gloria Feurra \u2014 2026-06-02",
                "Ellina Lapina \u2014 2026-06-10",
                "Ellina Lapina \u2014 2026-06-12"
              ],
              "double_check": null,
              "note": "Post-$500 design working sessions, by meeting date, current owner (calendar+Fathom). Proposal-stage meetings NOT counted. Jun 23\u201330 added: Mary (Agustina Jun 24 'finalize design direction' + Jun 30 Design Session), Val + Shiva (Bruna Jun 24/29 'finalize design'). Excluded Jun 23\u201330: Stephanie (La\u00eds) = discovery/follow-up; Gloria (La\u00eds) = build/technical (paid 10% Jun 15); Katie/Woodhull = trade.",
              "secondary": null
            },
            {
              "label": "$500 deposits",
              "value": 2,
              "unit": "deposits",
              "source": "Designer Gmail (payment date) \u00b7 current owner",
              "status": "live",
              "customers": [
                "Alex Bush",
                "Ellina Lapina"
              ],
              "double_check": "Stripe",
              "note": "In-window $500s: Mary Sapountzakis ~Jun 11; Ryan Lenox ~May 30; Sarah-Bruce Wisnom ~May 25; Val Nara ~May 22; Alex Bush ~Jun 1; Ellina Lapina ~Jun 5. NO new $500 deposits detected Jun 17\u201330 (all designer-mail hits were build-phase logistics; Michael Kramer still deciding, not paid). Melanie Stambaugh confirmed lost (refund Jun 18). Dates approximate \u2014 confirm in Stripe.",
              "secondary": null
            },
            {
              "label": "10% payments",
              "value": 1,
              "unit": "payments",
              "source": "Designer Gmail (10% order payment) \u00b7 current owner",
              "status": "snapshot",
              "customers": [
                "Gloria Feurra"
              ],
              "double_check": "Stripe",
              "note": "Gloria Feurra: 10% project payment Jun 15, deposit was May 6 (40 days) \u2014 owner La\u00eds. NO new 10% payments detected Jun 17\u201330 (Yorgo's Jun 29 invoice = build-phase production balance, not a funnel 10%). Backfill older 10% payments for an exact #6/#9/#10.",
              "secondary": null
            },
            {
              "label": "Active in design (pre-10%)",
              "value": 2,
              "unit": "customers",
              "source": "Design roster \u00b7 paid $500, not yet 10% \u00b7 current owner",
              "status": "snapshot",
              "customers": [
                "Alex Bush",
                "Ellina Lapina"
              ],
              "double_check": null,
              "note": "Active in design (paid $500, pre-10%) by current owner. Derived from post-$500 design activity; exact $500 dates pending Stripe. No roster changes Jun 17\u201330 (no new $500s, no new 10%): all 8 still in design. Gloria Feurra graduated to 10% Jun 15 (auto-removed).",
              "secondary": null
            },
            {
              "label": "Avg discovery \u2192 proposal",
              "value": 6,
              "unit": "days",
              "source": "Repo transcript dates \u00b7 discovery \u2192 proposal",
              "status": "live",
              "customers": [
                "Caitlin Patton \u2014 4d",
                "Colby Brown \u2014 7d",
                "Kenny Lin \u2014 7d"
              ],
              "double_check": null,
              "note": "avg over 3 proposal(s) in window",
              "secondary": null
            },
            {
              "label": "Avg proposal \u2192 $500",
              "value": 13,
              "unit": "days",
              "source": "Repo proposal date \u2192 deposit date",
              "status": "live",
              "customers": [
                "Alex Bush \u2014 13d"
              ],
              "double_check": null,
              "note": "avg over 1 deposit(s) in window",
              "secondary": null
            },
            {
              "label": "Avg $500 \u2192 10%",
              "value": 40,
              "unit": "days",
              "source": "Deposit date \u2192 10% payment date",
              "status": "live",
              "customers": [
                "Gloria Feurra \u2014 40d"
              ],
              "double_check": null,
              "note": "avg over 1 10% payment(s) in window",
              "secondary": null
            }
          ]
        }
      ]
    }
  ]
};
