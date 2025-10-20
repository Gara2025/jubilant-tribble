# Schema Markup Generation Guide

This document is the official rulebook for generating high-quality JSON-LD schema markup for our website. Its purpose is to ensure all schema is comprehensive, deeply interconnected, and focused on demonstrating Expertise, Authoritativeness, and Trustworthiness (EEAT).

All company-specific data (name, address, social links, etc.) should be sourced from the `COMPANY_DATA.json` file to ensure consistency.

---

## 1. The Core Workflow: The "Pre-flight Checklist"

Before generating any schema for a new page, a pre-flight check is mandatory. The AI assistant must ask for the following information if it has not been provided in the initial prompt:

1.  **The Live URL of the page.**
2.  **The exact Page Title.**
3.  **A brief Page Description.**
4.  **The Page Type:** Is it a **CONTENT** page or a **PRODUCT** page?
5.  **Interactive Widgets:** Does the page contain any interactive widgets?

This initial data gathering is critical for generating accurate and relevant schema.

---

## 2. General Schema Principles

These rules apply to **all** schema generated for our site.

*   **Be In-depth and Clean:** Use the most specific and appropriate schema types and properties available. The goal is a deep, comprehensive markup.
*   **Use `@id` for Interconnection:** Every primary entity (e.g., `WebPage`, `Organization`, `Article`, `Product`) must have a unique `@id`. Use these IDs to link entities together, creating a strong, interconnected graph.
*   **Focus on EEAT:** The primary goal is to signal Expertise, Authoritativeness, and Trustworthiness. This means always including detailed author information, publisher data, publication and modification dates, and linking to authoritative external profiles (`sameAs`).
*   **No Comments:** The final JSON-LD code must not contain any comments (`//` or `/* */`), as they can cause validation errors in our CMS.
*   **Entity Disambiguation:** For key entities (like our `Organization` or major topics), you must use the `sameAs` property to link to their corresponding Wikipedia or Wikidata pages. This removes ambiguity for search engines.

---

## 3. Component-Specific Schema Rules

This section defines the mandatory requirements for specific types of content.

### For `FAQPage` Schema

> **CRITICAL RULE:** For any page containing a Frequently Asked Questions (FAQ) section, you must generate a complete `FAQPage` schema. This schema must include **every single question and its corresponding answer**. Do not summarize or omit any Q&A pairs.
>
> When populating the `acceptedAnswer` text, you **must preserve all original HTML formatting tags** (`<p>`, `<ul>`, `<a>`, etc.). Do not convert the content to plain text. This is essential for semantic integrity and rich snippet rendering.

### For `Article` & `BlogPosting` Schema (Content Pages)

Content pages must include the following to maximize EEAT signals:
*   **`datePublished` and `dateModified`**: Use the dates provided in the prompt, formatted as YYYY-MM-DD.
*   **`author`**: Use a nested `Person` schema. The author's name, title, and profile links will be provided in the prompt. You must use `sameAs` to link to their bio page and LinkedIn profile.
*   **`publisher`**: This must always point to our main `Organization` entity using its `@id`.

### For `BreadcrumbList` Schema (Content Pages Only)

Breadcrumbs are only for CONTENT pages. The structure is determined by the "Printing Academy" hierarchy. The AI will prompt the user to choose the correct category from a predefined list to ensure the breadcrumb is accurate.

### For `Product` Schema (Product Pages with Calculators)

Product pages with dynamic calculators require a `Product` schema with a nested `AggregateOffer`.
*   The `AggregateOffer` must include the `lowPrice`, `highPrice`, and `priceCurrency`.
*   The various calculator options (e.g., "Paper Type," "Size") should be described within the product's properties.

### For Interactive Widgets

*   **Product-Enhancing Tools** (e.g., a size comparator) should be marked up as a feature of the main product using the `PropertyValue` schema.
*   **Standalone Utility Tools** (e.g., a unit converter) should be marked up using the `HowTo` and `HowToTool` schema types to describe what the tool is and how to use it.
