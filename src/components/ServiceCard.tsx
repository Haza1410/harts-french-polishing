import Image from "next/image";
import Link from "next/link";
import type { Service } from "@/lib/site";
import { asset } from "@/lib/asset";
import Icon from "./Icon";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl bg-ivory shadow-[var(--shadow-card)] ring-1 ring-espresso/5 transition-all duration-300 hover:-translate-y-1"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={asset(service.image)}
          alt={service.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso/50 to-transparent" />
        <span className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-ivory/95 text-mahogany shadow-sm">
          <Icon name={service.icon} size={22} />
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-2xl">{service.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
          {service.short}
        </p>
        <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-mahogany transition-colors group-hover:text-walnut">
          Learn more
          <Icon
            name="arrowRight"
            size={16}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </span>
      </div>
    </Link>
  );
}
