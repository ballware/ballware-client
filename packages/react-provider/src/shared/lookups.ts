import { CompiledEntityMetadata, CompiledPageData } from "@ballware/meta-interface"
import { LookupRequest } from "@ballware/react-contexts";

export const extractLookupsFromPageMetadata = (pageData: CompiledPageData) => {
    
    const lookups = pageData.lookups?.map(l => {
        if (l.type === 1) {
          if (l.hasParam) {
            return {
              type: 'autocompletewithparam',
              identifier: l.identifier,
              lookupId: l.id,
            } as LookupRequest;
          } else {
            return {
              type: 'autocomplete',
              identifier: l.identifier,
              lookupId: l.id,
            } as LookupRequest;
          }
        } else {
          if (l.hasParam) {
            return {
              type: 'lookupwithparam',
              identifier: l.identifier,
              lookupId: l.id,
              valueMember: l.valueMember,
              displayMember: l.displayMember,
            } as LookupRequest;
          } else {
            return {
              type: 'lookup',
              identifier: l.identifier,
              lookupId: l.id,
              valueMember: l.valueMember,
              displayMember: l.displayMember,
            } as LookupRequest;
          }
        }
      });

    return lookups;
}

export const extractLookupsFromEntityMetadata = (metaData: CompiledEntityMetadata) => {
    const lookups = [] as Array<LookupRequest>;

    if (metaData.lookups) {
    lookups.push(
        ...metaData.lookups.map(l => {
        if (l.type === 1) {
            if (l.hasParam) {
            return {
                type: 'autocompletewithparam',
                identifier: l.identifier,
                lookupId: l.id,
            } as LookupRequest;
            } else {
            return {
                type: 'autocomplete',
                identifier: l.identifier,
                lookupId: l.id,
            } as LookupRequest;
            }
        } else {
            if (l.hasParam) {
            return {
                type: 'lookupwithparam',
                identifier: l.identifier,
                lookupId: l.id,
                valueMember: l.valueMember,
                displayMember: l.displayMember,
            } as LookupRequest;
            } else {
            return {
                type: 'lookup',
                identifier: l.identifier,
                lookupId: l.id,
                valueMember: l.valueMember,
                displayMember: l.displayMember,
            } as LookupRequest;
            }
        }
        })
    );
    }

    if (metaData.picklists) {
    lookups.push(
        ...metaData.picklists.map(p => {
        return {
            type: 'pickvalue',
            identifier: p.identifier,
            entity: p.entity,
            field: p.field,
        } as LookupRequest;
        })
    );
    }

    if (metaData.stateColumn) {
    lookups.push(
        ...[
        {
            type: 'state',
            identifier: 'stateLookup',
            entity: metaData.entity,
        } as LookupRequest,
        {
            type: 'stateallowed',
            identifier: 'allowedStateLookup',
            entity: metaData.entity,
        } as LookupRequest,
        ]
    );
    }

    return lookups;
}