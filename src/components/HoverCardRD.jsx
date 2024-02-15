import React from 'react'
import { HoverCard } from "@radix-ui/themes"

const HoverCardRD = () => {
    return (
        <Text>
            Follow{' '}
            <HoverCard.Root>
                <HoverCard.Trigger>
                    <Link href="https://twitter.com/radix_ui" target="_blank">
                        @radix_ui
                    </Link>
                </HoverCard.Trigger>
                <HoverCard.Content>
                    <Flex gap="4">
                        <Avatar
                            size="3"
                            fallback="R"
                            radius="full"
                            src="https://pbs.twimg.com/profile_images/1337055608613253126/r_eiMp2H_400x400.png"
                        />
                        <Box>
                            <Heading size="3" as="h3">
                                Radix
                            </Heading>
                            <Text as="div" size="2" color="gray">
                                @radix_ui
                            </Text>

                            <Text as="div" size="2" style={{ maxWidth: 300 }} mt="3">
                                React components, icons, and colors for building high-quality,
                                accessible UI.
                            </Text>
                        </Box>
                    </Flex>
                </HoverCard.Content>
            </HoverCard.Root>{' '}
            for updates.
        </Text>
    )
}

export default HoverCardRD