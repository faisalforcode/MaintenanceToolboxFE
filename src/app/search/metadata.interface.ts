export interface Metadata {
    volumeTitle: string;
    volumeNumber: string;
    volumeType: string;
    issuedDate: string;
    applicability: string;
    model: string;
    variant: string;
    contentFileName: string
}

export interface MetadataSource {
    source: Metadata;
}
